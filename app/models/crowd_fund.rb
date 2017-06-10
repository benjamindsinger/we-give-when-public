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

  GOAL_TYPES = [
    "BACKERS",
    "DOLLARS"
  ]

  def must_have_valid_crowd_fund_type
    unless CROWD_FUND_TYPES.include?(crowd_fund_type)
      errors.add(:crowd_fund_type, "must be a valid type")
    end
  end

  def time_until_goal
    goal_date - DateTime.current
  end

  def progress_made_to_goal
    case goal_type
    when "BACKERS"
      crowd_fund_memberships.count
    when "DOLLARS"
      total_dollars
    end
  end

  def progress_left_to_goal
    goal_amount - progress_made_to_goal
  end

  def total_dollars
    (total_cents / 100).to_i
  end

  def total_cents
    crowd_fund_memberships.map { |c| c.amount_per_time_in_cents }
                          .inject(0, :+)
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
