require "money"

class CrowdFundMembership < ApplicationRecord
  belongs_to :crowd_fund
  belongs_to :funder

  def charge_member(number_of_triggers, api_to_charge)
    TriggerCharge.new(
      crowd_fund_membership: self,
      api_to_charge: api_to_charge,
      number_of_triggers: number_of_triggers
    ).charge_funder
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
