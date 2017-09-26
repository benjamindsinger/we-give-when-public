class Cause < ActiveRecord::Base
  has_one :legal_entity
  has_many :crowd_funds, inverse_of: :cause
  after_create :create_stripe_account

  def tos_unsigned?
    tos_acceptance_date_in_seconds.nil?
  end

  def create_stripe_account(api = Stripe::Account)
    return if Rails.env.test?  # Not a good pattern; TODO pass in a mock service
                               # for Stripe in the test environment.

    raise 'Already has Stripe acct' if stripe_account_id.present?

    acct = api.create({
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

  def update_legal_entity_for_stripe
    raise 'Has no stripe_account_id' if stripe_account_id.nil?

    acct = Stripe::Account.retrieve(stripe_account_id)

    data = self.legal_entity

    acct.legal_entity.business_name = data.business_name
    acct.legal_entity.first_name = data.first_name
    acct.legal_entity.last_name = data.last_name
    acct.legal_entity.address.city = data.city
    acct.legal_entity.address.country = 'US'
    acct.legal_entity.address.line1 = data.address_line1
    acct.legal_entity.address.postal_code = data.postal_code
    acct.legal_entity.address.state = data.state
    acct.legal_entity.dob.day = data.dob.day
    acct.legal_entity.dob.month = data.dob.month
    acct.legal_entity.dob.year = data.dob.year

    acct.save
  end

  def retrieve_stripe_account
    Stripe::Account.retrieve(stripe_account_id)
  end

end
