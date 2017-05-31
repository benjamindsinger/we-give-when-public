require "rails_helper"

RSpec.describe CampaignAdmin, type: :model do

  describe "#must_have_campaign_unless_super_admin" do

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

    context "regular admin" do

      context "with associated campagin" do
        let(:campaign_admin) {
          CampaignAdmin.new(
            email: 'test@example.com', password: 'testpassword', campaign_id: campaign.id
          )
        }
        it "is valid" do
          expect(campaign_admin).to be_valid
        end
      end

      context "without associated campagin" do
        let(:campaign_admin) {
          CampaignAdmin.new(
            email: 'test@example.com', password: 'testpassword'
          )
        }
        it "is not valid" do
          expect(campaign_admin).not_to be_valid
        end
      end

    end

    context "super admin" do
      context "with associated campagin" do
        let(:campaign_admin) {
          CampaignAdmin.new(
            email: 'test@example.com', super_admin: true, password: 'testpassword', campaign_id: campaign.id
          )
        }

        it "is valid" do
          expect(campaign_admin).to be_valid
        end
      end

      context "without associated campagin" do
        let(:campaign_admin) {
          CampaignAdmin.new(
            email: 'test@example.com', super_admin: true, password: 'testpassword'
          )
        }

        it "is valid" do
          expect(campaign_admin).to be_valid
        end
      end
    end

  end

end
