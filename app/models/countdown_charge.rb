class CountdownCharge

  def initialize(crowd_fund_membership:)
    @crowd_fund_membership = crowd_fund_membership
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
    add_stripe_fees(amount_before_fees)
  end

  def last_month
    DateTime.current - 1.month
  end

  def days_last_month
    Time.days_in_month(last_month.month, last_month.year)
  end

  def our_fee_in_cents
    (amount_in_cents * 0.055).to_i  # No fractional U.S. cents
  end

  def token
    Stripe::Token.create(
      { customer: customer },
      { stripe_account: connected_stripe_account_id }
    )
  end

  def customer
    @crowd_fund_membership.funder.stripe_customer_id
  end

  def connected_stripe_account_id
    @crowd_fund_membership.crowd_fund.cause.stripe_account_id
  end

  def amount_before_fees
    @crowd_fund_membership.amount_per_time_in_cents * days_last_month
  end

  def add_stripe_fees(amount)
    # Must return an integer, no fractional U.S. cents
    ((amount * 1.084) + 30).to_i
  end

end
