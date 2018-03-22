require "money"

class CrowdFundMembership < ApplicationRecord
  belongs_to :crowd_fund
  belongs_to :funder

  attr_accessor :trigger_charge

  def charge_member_based_on_triggers(number_of_triggers, api_to_charge)
    return false unless self.status == 'active'

    self.trigger_charge = TriggerCharge.new(
      crowd_fund_membership: self,
      api_to_charge: api_to_charge,
      number_of_triggers: number_of_triggers
    )

    self.trigger_charge.charge_funder
  end

  def charge_member_for_month(api_to_charge)
    return false unless self.status == 'active'

    # TODO (ARS)
  end

  def sign_up_date
    created_at.strftime("%-m/%e/%y %r")
  end

  def amount_per_time_in_dollars
    Money.new(amount_per_time_in_cents, "USD").format
  end

  def monthly_maximum_in_dollars
    Money.new(monthly_maximum_in_cents, "USD").format
  end

  def monthly_max_including_fees_in_dollars
    Money.new(trigger_charge.monthly_maximum_after_fees, "USD").format
  end

  def total_charge_this_month_in_dollars
    Money.new(trigger_charge.amount_to_charge, "USD").format
  end

  def self.dashboard_row_headers
    [
      "Sign-Up Date",
      "First Name",
      "Last Name",
      "Amount Per Event",
      "Monthly Maximum",
      "Occupation",
      "Employer",
      "Email",
      "Phone",
      "Address",
      "City",
      "State",
      "ZIP"
    ]
  end

  def self.super_dashboard_row_headers
    dashboard_row_headers.unshift("Crowd Fund")
  end

  def to_dashboard_row
    [
      sign_up_date,
      funder.first_name,
      funder.last_name,
      amount_per_time_in_dollars,
      monthly_maximum_in_dollars,
      funder.occupation,
      funder.employer,
      funder.email,
      funder.phone,
      funder.address,
      funder.city,
      funder.us_state,
      funder.zip,
    ]
  end

  def to_super_dashboard_row
    to_dashboard_row.unshift(crowd_fund.name)
  end

end
