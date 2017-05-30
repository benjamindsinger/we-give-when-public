class Giver < ApplicationRecord
  validates :stripe_customer_id, presence: true

  def charge(amount)
    Stripe::Charge.create(
      amount: amount,
      currency: "usd",
      customer: stripe_customer_id,
    )
  end
end
