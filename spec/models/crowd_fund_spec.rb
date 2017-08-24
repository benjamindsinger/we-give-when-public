require "rails_helper"

RSpec.configure do |c|
  c.extend Mocks
end

RSpec.describe CrowdFund, type: :model do

  describe "#charge_funders" do

    before do
      allow(Stripe::Token).to receive(:create).and_return(Mocks::FakeStripeToken.new)
    end

    let(:cause) { Cause.create!(stripe_account_id: 'AAAAAA', name: 'EEEEEEE') }
    let(:crowd_fund) { CrowdFund.create!(cause: cause, name: 'UUUUUU') }

    context "7 funders" do
      before do
        7.times do
          funder = Funder.create!(stripe_customer_id: 'AAAAAA')
          CrowdFundMembership.create!(
            funder: funder,
            crowd_fund: crowd_fund,
            status: 'active',
            cover_fees: true,
            amount_per_time_in_cents: 100,
            monthly_maximum_in_cents: 100
          )
        end
      end

      let(:charges) { crowd_fund.charge_funders(3, fake_api, Mocks::FakeLog.new) }
      let(:successful_charge_count) { charges.select { |c| c }.size }

      context "stripe raises no errors" do
        let(:fake_api) { Mocks::FakeStripeChargeApiNoErrors.new }

        it "charges 7 funders" do
          expect(successful_charge_count).to eq 7
        end
      end

      context "stripe raises errors on the first two" do
        let(:fake_api) { Mocks::FakeStripeChargeApiTwoErrors.new }

        it "charges 5 funders" do
          expect(successful_charge_count).to eq 5
        end
      end

    end
  end

end
