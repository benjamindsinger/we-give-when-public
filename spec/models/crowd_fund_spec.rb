require "rails_helper"

RSpec.describe CrowdFund, type: :model do

  describe "#must_have_valid_crowd_fund_type" do

    context "crowd fund has acknowledged string type" do
      let(:crowd_fund) {
        CrowdFund.new({
          name: 'Good Cause',
          crowd_fund_type: 'COUNTDOWN'
        })
      }

      it "is valid" do
        expect(crowd_fund).to be_valid
      end
    end

    context "crowd fund has non-acknowledged string type" do
      let(:crowd_fund) {
        CrowdFund.new({
          name: 'Good Cause',
          crowd_fund_type: 'MEGA-FUND'
        })
      }

      it "is valid" do
        expect(crowd_fund).to be_invalid
      end

    end

    context "crowd fund has no string type" do
      let(:crowd_fund) {
        CrowdFund.new({
          name: 'Good Cause',
        })
      }

      it "is valid" do
        expect(crowd_fund).to be_invalid
      end

    end

  end

end
