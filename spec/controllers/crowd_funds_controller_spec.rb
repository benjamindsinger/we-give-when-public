require "rails_helper"

RSpec.describe CrowdFundsController, type: :controller do

  let(:cause) { Cause.create!(name: 'Fight for Rights') }

  let(:crowd_fund) {
    CrowdFund.create!(
      name: 'Example Crowd Fund',
      crowd_fund_type: 'COUNTDOWN',
      cause: cause
    )
  }

  let(:cause_admin) {
    CauseAdmin.create!(
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
          get :dashboard, params: { id: crowd_fund.id }
          expect(response).to be_success
        end
      end

      context "cause admin for a different crowd fund" do
        let(:some_other_cause) { Cause.create!(name: 'Fight Against Rights') }

        let(:some_other_admin) {
          CauseAdmin.create!(
            email: 'some-other-test@example.com',
            password: 'test-password',
            cause: some_other_cause
          )
        }

        it "fails" do
          sign_in some_other_admin
          get :dashboard, params: { id: crowd_fund.id }
          expect(response).not_to be_success
        end
      end
    end

    context "user not logged in" do
      it "fails" do
        get :dashboard, params: { id: crowd_fund.id }
        expect(response).not_to be_success
      end
    end
  end

end
