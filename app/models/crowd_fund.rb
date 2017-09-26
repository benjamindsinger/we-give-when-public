class CrowdFund < ApplicationRecord
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :crowd_fund_memberships
  belongs_to :cause
  validates :cause, presence: true

  def name_except_for_fight_for_15
    return 'Will Guzzardi' if name === 'Fight for $15'

    return name
  end

  def disclaimer_paragraphs_for_form
    disclaimer_paragraphs.join(" // ")
  end

  def charge_funders(number_of_triggers,
                     api_to_charge = Stripe::Charge,
                     log=STDOUT)
    crowd_fund_memberships.map do |membership|
      begin
        if flat_monthly_amount
          membership.charge_member_for_month(api_to_charge)
        else
          membership.charge_member_based_on_triggers(number_of_triggers, api_to_charge)
        end
      rescue => error
        log.write("Error charging card! #{error}")
        false
      end
    end
  end

  def url
    "https://wegivewhen.com/campaigns/#{slug}"
  end

end
