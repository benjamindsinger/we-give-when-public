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

  def name_except_for_fight_for_15
    return 'Will Guzzardi' if name === 'Fight for $15'

    return name
  end

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

  def url
    "https://wegivewhen.com/campaigns/#{slug}"
  end

  # Goal & Progress bar

  def time_until_goal
    (goal_date - DateTime.current).to_i / (24 * 60 * 60)
  end

  def progress_made_to_goal
    case goal_type
    when "BACKERS"
      crowd_fund_memberships.count
    when "DOLLARS"
      total_dollars
    end
  end

  def progress_fraction
    progress_made_to_goal / goal_amount
  end

  def progress_to_go
    goal_amount - progress_made_to_goal
  end

  def total_dollars
    (total_cents / 100).to_i
  end

  def total_cents
    crowd_fund_memberships.map { |c| c.amount_per_time_in_cents }
                          .inject(0, :+)
  end

  def progress_amount_phrase
    case goal_type
    when "BACKERS"
      "#{progress_made_to_goal}"
    when "DOLLARS"
      "$#{progress_made_to_goal}"
    end
  end

  def progress_goal_phrase
    case goal_type
    when "BACKERS"
      "of #{goal_amount} backer goal"
    when "DOLLARS"
      "of $#{goal_amount} goal"
    end
  end

  def progress_to_go_phase
    case goal_type
    when "BACKERS"
      "#{progress_to_go} backers needed"
    when "DOLLARS"
      "$#{progress_to_go} needed"
    end
  end

  def progress_time_phrase
    "#{time_until_goal} days left"
  end

end
