class CrowdFundMembership < ApplicationRecord
  belongs_to :crowd_fund
  belongs_to :funder

  def crowd_fund_type
    crowd_fund.crowd_fund_type
  end

  def charge_funder(number_of_triggers)
    amount = amount_to_charge(number_of_triggers)
    our_fee = amount * 0.055
    source = funder.stripe_customer_id
    connected_stripe_account_id = crowd_fund.cause.stripe_account_id

    Stripe::Charge.create({
        currency: "usd",
        amount: amount,
        source: source,
        application_fee: our_fee
      },
      stripe_account: connected_stripe_account_id
    )
  end

  def amount_to_charge(number_of_triggers)
    case crowd_fund_type
    when 'COUNTDOWN'
      amount_to_charge_for_countdown
    when 'SLINGSHOT'
      amount_to_charge_for_slingshot(number_of_triggers)
    end
  end

  def amount_to_charge_for_countdown
    amount_before_fees = amount_per_time_in_cents * days_last_month

    return add_stripe_fees(amount_before_fees)
  end

  def amount_to_charge_for_slingshot(number_of_triggers)
    amount_before_fees = amount_per_time_in_cents * number_of_triggers

    amount_after_fees = add_stripe_fees(amount_before_fees)

    if amount_after_fees > monthly_maximum_after_fees
      monthly_maximum_after_fees
    else
      amount_after_fees
    end
  end

  private

    def last_month
      DateTime.current - 1.month
    end

    def days_last_month
      Time.days_in_month(last_month.month, last_month.year)
    end

    def add_stripe_fees(amount)
      (amount * 1.084) + 30
    end

    def monthly_maximum_after_fees
      add_stripe_fees(self.monthly_maximum_in_cents)
    end

end
