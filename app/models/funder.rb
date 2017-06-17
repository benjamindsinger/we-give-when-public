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

  def location_info
    return "#{address}, #{city} #{us_state} #{zip}" if address

    return "#{city} #{us_state} #{zip}"
  end

end
