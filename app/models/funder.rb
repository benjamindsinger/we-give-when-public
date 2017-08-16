class Funder < ApplicationRecord
  validates :stripe_customer_id, presence: true
  has_many :crowd_fund_memberships
  accepts_nested_attributes_for :crowd_fund_memberships

  def retrieve_stripe_account
    Stripe::Customer.retrieve(stripe_customer_id)
  end

  def charge(amount)
    Stripe::Charge.create(
      amount: amount,
      currency: "usd",
      customer: stripe_customer_id,
    )
  end

end
