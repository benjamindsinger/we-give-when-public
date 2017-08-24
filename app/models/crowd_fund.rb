class CrowdFund < ApplicationRecord
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :crowd_fund_memberships
  belongs_to :cause

  def name_except_for_fight_for_15
    return 'Will Guzzardi' if name === 'Fight for $15'

    return name
  end

  def charge_funders(number_of_triggers, api_to_charge = Stripe::Charge)
    crowd_fund_memberships.each do |membership|
      begin
        membership.charge_member(number_of_triggers, api_to_charge)
      rescue => error
        puts "Error charging card! #{error}"
      end
    end
  end

  def url
    "https://wegivewhen.com/campaigns/#{slug}"
  end

end
