require "rails_helper"

RSpec.describe FundersController, type: :controller do

  describe "POST #create" do

    class FakeStripeCustomer
      def id
        'FAKE_STRIPE_CUSTOMER_ID'
      end
    end

    before do
      allow(Stripe::Customer).to(
        receive(:create).with({
          source: 'FAKE_STRIPE_TOKEN'
        })
      ).and_return(
        FakeStripeCustomer.new
      )
    end

    let(:crowd_fund) {
      CrowdFund.create!(name: 'Democracy Spring')
    }

    context "valid giver data, valid campaign membership data" do
      let(:params) {
        {
          funderDetails: {
            firstName: 'Josh',
            lastName: 'Q.',
            occupation: 'Web Dev',
            employer: 'Self Employed',
            email: 'test@example.com',
            phone: '111-222-3333',
            address: '555 GiveWhen Lane',
            city: 'Chicago',
            usState: 'IL',
            zip: '60660',
          },
          stripeToken: {
            id: 'FAKE_STRIPE_TOKEN'
          },
          crowdFundMembershipDetails: {
            amountPerTimeInCents: 100,
            monthlyMaximumInCents: 1000,
            coverFees: true,
            crowdFundId: crowd_fund.id
          }
        }
      }

      it "succeeds" do
        post :create, params: params
        expect(response).to be_success
      end
    end

    context "valid giver data, no campaign membership data" do
      let(:params) {
        {
          funderDetails: {
            firstName: 'Josh',
            lastName: 'Q.',
            occupation: 'Web Dev',
            employer: 'Self Employed',
            email: 'test@example.com',
            phone: '111-222-3333',
            address: '555 GiveWhen Lane',
            city: 'Chicago',
            usState: 'IL',
            zip: '60660',
          },
          stripeToken: {
            id: 'FAKE_STRIPE_TOKEN'
          }
        }
      }

      it "fails" do
        expect {
          post :create, params: params
        }.to raise_error(
          ActionController::ParameterMissing
        )
      end
    end
  end

end
