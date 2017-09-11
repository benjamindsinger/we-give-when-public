class FeesCalculator < Struct.new :amount

  def add_stripe_fees
    # Must return an integer, no fractional U.S. cents
    (((amount * 1.055) + 30)/0.971).to_i
  end

end
