class Funder < ApplicationRecord
  validates :stripe_customer_id, presence: true
  has_many :crowd_fund_memberships
  accepts_nested_attributes_for :crowd_fund_memberships

  def charge(amount)
    Stripe::Charge.create(
      amount: amount,
      currency: "usd",
      customer: stripe_customer_id,
    )
  end
end
