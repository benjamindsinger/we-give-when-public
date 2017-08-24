require "rails_helper"

RSpec.describe CrowdFund, type: :model do

  describe "#charge_funders" do
    let(:cause) {
      Cause.create!(stripe_account_id: 'AAAAAA', name: 'EEEEEEE')
    }

    let(:crowd_fund) {
      CrowdFund.create!(cause: cause)
    }

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

        crowd_fund.reload
      end

      context "stripe raises no errors" do
        it "charges 7 funders" do
          expect(crowd_fund.charge_funders(3)).to eq 1
        end
      end

      context "stripe raises errors on the first two" do
        it "charges 5 funders" do
          expect(crowd_fund.charge_funders(3)).to eq 1
        end
      end

    end
  end

end
