require "rails_helper"

RSpec.describe CampaignsController, type: :controller do

  let(:campaign) {
    Campaign.create!(
      name: 'Example Campaign',
      launch_date: DateTime.now,
      donation_page_data: {
        background_image_class: 'example',
        title: 'Example Title',
        donation_form_data: {},
      }
    )
  }

  let(:campaign_admin) {
    CampaignAdmin.create!(
      email: 'test@example.com',
      password: 'test-password',
      campaign: campaign
    )
  }

  describe "GET #show" do
    context "user logged in" do
      it "succeeds" do
        sign_in campaign_admin
        get :show, params: { id: campaign.id }
        expect(response).to be_success
      end
    end

    context "user not logged in" do
      it "succeeds" do
        get :show, params: { id: campaign.id }
        expect(response).to be_success
      end
    end
  end

  describe "GET #show" do
    context "user logged in" do
      context "user associated with the campaign" do
        it "succeeds" do
          sign_in campaign_admin
          get :dashboard, params: { id: campaign.id }
          expect(response).to be_success
        end
      end

      context "user not associated with the campaign" do
        let(:some_other_campaign) {
          Campaign.create!(
            name: 'Example Campaign',
            launch_date: DateTime.now,
            donation_page_data: {
              background_image_class: 'example',
              title: 'Example Title',
              donation_form_data: {},
            }
          )
        }

        let(:some_other_campaign_admin) {
          CampaignAdmin.create!(
            email: 'some-other-test@example.com',
            password: 'test-password',
            campaign: some_other_campaign
          )
        }

        it "fails" do
          sign_in some_other_campaign_admin
          get :dashboard, params: { id: campaign.id }
          expect(response).not_to be_success
        end
      end
    end

    context "user not logged in" do
      it "fails" do
        get :dashboard, params: { id: campaign.id }
        expect(response).not_to be_success
      end
    end
  end

end
