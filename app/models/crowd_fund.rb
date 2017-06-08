class CrowdFund < ApplicationRecord
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :crowd_fund_memberships
  belongs_to :cause
  validate :must_have_valid_crowd_fund_type

  CROWD_FUND_TYPES = [
    "COUNTDOWN",
    "SLINGSHOT"
  ]

  def must_have_valid_crowd_fund_type
    unless CROWD_FUND_TYPES.include?(crowd_fund_type)
      errors.add(:crowd_fund_type, "must be a valid type")
    end
  end

  def charge_funders_for_slingshot(number_of_triggers)
    crowd_fund_memberships.each do |membership|
      TriggerCharge.new(
        crowd_fund_membership: membership,
        number_of_triggers: number_of_triggers
      ).charge_funder
    end
  end

end
