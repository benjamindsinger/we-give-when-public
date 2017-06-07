class Cause < ActiveRecord::Base
  has_one :legal_entity
  has_many :crowd_funds

  def create_stripe_account
    acct = Stripe::Account.create({
      country: "US",
      type: "custom"
    })
  end

end
