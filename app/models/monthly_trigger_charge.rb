class MonthlyTriggerCharge < ApplicationRecord
  belongs_to :crowd_fund
  validates :crowd_fund, presence: true
  after_create :charge_funders

  def charge_funders
    crowd_fund.charge_funders(self.number_of_triggers, Stripe::Charge, STDOUT)
  end
end
