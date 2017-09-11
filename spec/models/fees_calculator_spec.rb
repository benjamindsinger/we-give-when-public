require "rails_helper"

RSpec.describe FeesCalculator, type: :model do

  describe "#add_stripe_fees" do
    subject { FeesCalculator.new(amount_in_cents) }
    let(:amount_in_cents) { 100 }

    it "calculates the correct amount" do
      expect(subject.add_stripe_fees).to eq 139
    end
  end

end
