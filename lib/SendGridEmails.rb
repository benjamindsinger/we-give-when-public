module Routing
  extend ActiveSupport::Concern
  include Rails.application.routes.url_helpers

  included do
    def default_url_options
      ActionMailer::Base.default_url_options
    end
  end
end

class UrlGenerator
  include Routing
end

class SendGridEmails
  require 'sendgrid-ruby'
  include SendGrid

  def self.monthly_charge(membership, number_of_triggers)
    @membership = membership
    @crowd_fund = membership.crowd_fund
    @funder = membership.funder
    @cause = @crowd_fund.cause
    @legal_entity = @cause.legal_entity
    # CROWDFUND_FOE_IMG_URL
    @foe_img_url = @crowd_fund.foe_img_url

    # TRIGGER_EVENT_PAST_TENSE
    @trigger_event_past_tense = @crowd_fund.trigger_event_past_tense

    # NUMBER_OF_TRIGGERS
    @number_of_triggers = number_of_triggers.to_s

    # FIRST_NAME
    @funder_first_name = @funder.first_name

    # FUNDER_PLEDGE_PER_TRIGGER
    @funder_pledge_per_trigger = @membership.amount_per_time_in_dollars

    # FUNDER_MONTHLY_MAX_INCLUDING_FEES
    @funder_monthly_max_including_fees = @membership.monthly_max_including_fees_in_dollars

    # FUNDER_TOTAL_CHARGE_THIS_MONTH
    @funder_total_charge_this_month = @membership.total_charge_this_month_in_dollars

    # CAMPAIGN_URL
    @campaign_url = UrlGenerator.new.crowd_fund_url(@crowd_fund)

    # ORG_REP_FIRST_NAME
    @org_rep_first_name = @legal_entity.first_name

    # ORG_REP_LAST_NAME
    @org_rep_last_name = @legal_entity.last_name

    # ORG_REP_TITLE
    @org_rep_title = @legal_entity.title

    @funder_email_object = Email.new(email: @funder.email)

    mail = Mail.new
    mail.from = Email.new(email: "GiveWhen on behalf of #{@cause.name} <wegivewhen@gmail.com>")
    personalization = Personalization.new
    personalization.add_to(@funder_email_object)
    # personalization.add_cc(@ben_email_object) if Rails.env == "development"

    personalization.add_substitution(Substitution.new(key: '|CROWDFUND_FOE_IMG_URL|', value: @foe_img_url))
    personalization.add_substitution(Substitution.new(key: '|TRIGGER_EVENT_PAST_TENSE|', value: @trigger_event_past_tense))
    personalization.add_substitution(Substitution.new(key: '|NUMBER_OF_TRIGGERS|', value: @number_of_triggers))
    personalization.add_substitution(Substitution.new(key: '|FIRST_NAME|', value: @funder_first_name))
    personalization.add_substitution(Substitution.new(key: '|FUNDER_PLEDGE_PER_TRIGGER|', value: @funder_pledge_per_trigger))
    personalization.add_substitution(Substitution.new(key: '|FUNDER_MONTHLY_MAX_INCLUDING_FEES|', value: @funder_monthly_max_including_fees))
    personalization.add_substitution(Substitution.new(key: '|FUNDER_TOTAL_CHARGE_THIS_MONTH|', value: @funder_total_charge_this_month))
    personalization.add_substitution(Substitution.new(key: '|CAMPAIGN_URL|', value: @campaign_url))
    personalization.add_substitution(Substitution.new(key: '|ORG_REP_FIRST_NAME|', value: @org_rep_first_name))
    personalization.add_substitution(Substitution.new(key: '|ORG_REP_LAST_NAME|', value: @org_rep_last_name))
    personalization.add_substitution(Substitution.new(key: '|ORG_REP_TITLE|', value: @org_rep_title))

    mail.add_personalization(personalization)
    mail.template_id = '87bbc8b0-45bb-47ff-981e-d554bc3da256'

    sg = SendGrid::API.new(api_key: Figaro.env.sendgrid_test)
    puts mail
    begin
      response = sg.client.mail._("send").post(request_body: mail.to_json)
    rescue Exception => e
      puts e.message
    end
    puts response.status_code
    puts response.body
    puts response.headers
  end

end