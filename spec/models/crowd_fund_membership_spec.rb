require "rails_helper"

RSpec.configure do |c|
  c.extend Mocks
end

RSpec.describe CrowdFundMembership, type: :model do

  let(:fake_api) { Mocks::FakeStripeChargeApiNoErrors.new }

  let(:funder) { Funder.create(stripe_customer_id: 'AAAH') }

  let(:cause) { Cause.create(stripe_account_id: 'AAAAH', name: 'EEEE') }

  let(:crowd_fund) { CrowdFund.create(name: 'OOOOH', cause: cause) }

  before do
    allow(Stripe::Token).to receive(:create).and_return(Mocks::FakeStripeToken.new)
  end

  describe "#charge_member_based_on_triggers" do
    context 'active' do
      let(:membership) {
        CrowdFundMembership.create(
          status: 'active',
          cover_fees: true,
          amount_per_time_in_cents: 100,
          monthly_maximum_in_cents: 1000,
          funder: funder,
          crowd_fund: crowd_fund
        )
      }

      it 'charges' do
        expect(membership.charge_member_based_on_triggers(1, fake_api)).to eq true
      end
    end

    context 'inactive' do
      let(:membership) {
        CrowdFundMembership.create(
          status: 'inactive',
          cover_fees: true,
          amount_per_time_in_cents: 100,
          monthly_maximum_in_cents: 1000,
          funder: funder,
          crowd_fund: crowd_fund
        )
      }

      it 'does not charge' do
        expect(membership.charge_member_based_on_triggers(1, fake_api)).to eq false
      end
    end
  end

end
