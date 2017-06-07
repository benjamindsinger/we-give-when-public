class Cause < ActiveRecord::Base
  has_one :legal_entity
  has_many :crowd_funds

  def create_stripe_account
    return if stripe_account_id.present?

    acct = Stripe::Account.create({
      country: "US",
      type: "custom"
    })

    stripe_account_id = acct["id"]

    update!(
      stripe_account_id: stripe_account_id
    )
  end

end
