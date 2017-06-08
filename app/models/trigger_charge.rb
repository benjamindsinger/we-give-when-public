class TriggerCharge

  def initialize(crowd_fund_membership:, number_of_triggers:)
    @crowd_fund_membership = crowd_fund_membership
    @number_of_triggers = number_of_triggers
  end

  def charge_funder
    Stripe::Charge.create({
        currency: "usd",
        amount: amount_to_charge,
        source: token.id,
        application_fee: our_fee_in_cents
      },
      stripe_account: connected_stripe_account_id
    )
  end

  private

  def amount_to_charge
    if amount_after_fees > monthly_maximum_after_fees
      monthly_maximum_after_fees
    else
      amount_after_fees
    end
  end

  def our_fee_in_cents
    (amount_in_cents * 0.055).to_i  # No fractional U.S. cents
  end

  def token
    Stripe::Token.create(
      {
        customer: customer,
      },
      {
        stripe_account: connected_stripe_account_id
      }
    )
  end

  def customer
    @crowd_fund_membership.funder.stripe_customer_id
  end

  def connected_stripe_account_id
    @crowd_fund_membership.crowd_fund.cause.stripe_account_id
  end

  def amount_before_fees
    @crowd_fund_membership.amount_per_time_in_cents * @number_of_triggers
  end

  def amount_after_fees
    add_stripe_fees(amount_before_fees)
  end

  def monthly_maximum_after_fees
    add_stripe_fees(@crowd_fund_membership.monthly_maximum_in_cents)
  end

  def add_stripe_fees(amount)
    # Must return an integer, no fractional U.S. cents
    ((amount * 1.084) + 30).to_i
  end

end
