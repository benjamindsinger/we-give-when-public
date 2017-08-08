class Cause < ActiveRecord::Base
  has_one :legal_entity
  has_many :crowd_funds

  def tos_unsigned?
    tos_acceptance_date_in_seconds.nil?
  end

  def create_stripe_account
    raise 'Already has Stripe acct' if stripe_account_id.present?

    acct = Stripe::Account.create({
      country: "US",
      type: "custom"
    })

    stripe_account_id = acct["id"]

    update!(
      stripe_account_id: stripe_account_id
    )
  end

  def update_bank_account(account_number:, routing_number:)
    raise 'Has no stripe_account_id' if stripe_account_id.nil?

    acct = Stripe::Account.retrieve(stripe_account_id)

    acct.external_accounts.create(external_account: {
      object: "bank_account",
      account_number: account_number,
      routing_number: routing_number,
      country: "US",
      currency: "usd",
    })
  end

  def retrieve_stripe_account
    Stripe::Account.retrieve(stripe_account_id)
  end

end
