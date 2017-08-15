class CrowdFund < ApplicationRecord
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :crowd_fund_memberships
  belongs_to :cause

  def name_except_for_fight_for_15
    return 'Will Guzzardi' if name === 'Fight for $15'

    return name
  end

  def charge_funders(number_of_triggers)
    crowd_fund_memberships.each do |membership|
      TriggerCharge.new(
        crowd_fund_membership: membership,
        number_of_triggers: number_of_triggers
      ).charge_funder
    end
  end

  def url
    "https://wegivewhen.com/campaigns/#{slug}"
  end

end
