require "rails_helper"

RSpec.describe CrowdFundsController, type: :controller do

  let(:crowd_fund) {
    CrowdFund.create!(
      name: 'Example Campaign',
      is_countdown: true,
      is)
  }

  let(:cause) { Cause.create! }

  let(:cause_admin) {
    CampaignAdmin.create!(
      email: 'test@example.com',
      password: 'test-password',
      cause: cause
    )
  }

  describe "GET #show" do
    context "user logged in" do
      it "succeeds" do
        sign_in cause_admin
        get :show, params: { id: crowd_fund.id }
        expect(response).to be_success
      end
    end

    context "user not logged in" do
      it "succeeds" do
        get :show, params: { id: crowd_fund.id }
        expect(response).to be_success
      end
    end
  end

  describe "GET #dashboard" do

    context "user logged in" do
      context "cause admin for the correct crowd fund" do
        it "succeeds" do
          sign_in cause_admin
          get :dashboard, params: { id: campaign.id }
          expect(response).to be_success
        end
      end

      context "cause admin for a different crowd fund" do
        let(:some_other_cause) { Cause.create! }

        let(:some_other_admin) {
          CauseAdmin.create!(
            email: 'some-other-test@example.com',
            password: 'test-password',
            cause: some_other_cause
          )
        }

        it "fails" do
          sign_in some_other_admin
          get :dashboard, params: { id: cause.id }
          expect(response).not_to be_success
        end
      end
    end

    context "user not logged in" do
      it "fails" do
        get :dashboard, params: { id: cause.id }
        expect(response).not_to be_success
      end
    end
  end

end
