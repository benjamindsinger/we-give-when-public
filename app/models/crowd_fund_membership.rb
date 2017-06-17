require "money"

class CrowdFundMembership < ApplicationRecord
  belongs_to :crowd_fund
  belongs_to :funder

  def sign_up_date
    created_at.strftime("%-m/%e/%y %r")
  end

  def amount_per_time_in_dollars
    Money.new(amount_per_time_in_cents, "USD").format
  end

  def monthly_maximum_in_dollars
    Money.new(monthly_maximum_in_cents, "USD").format
  end

  def self.dashboard_headers
    [
      "Sign-Up Date",
      "Name",
      "Amount Per Event",
      "Monthly Maximum",
      "Occupation",
      "Employer",
      "Email",
      "Phone",
      "Address",
    ]
  end

  def to_dashboard_row
    [
      sign_up_date,
      "#{funder.first_name} #{funder.last_name}",
      amount_per_time_in_dollars,
      monthly_maximum_in_dollars,
      funder.occupation,
      funder.employer,
      funder.email,
      funder.phone,
      "#{funder.address}, #{funder.city} #{funder.us_state} #{funder.zip}",
    ]
  end

end
