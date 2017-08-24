require "rails_helper"

RSpec.describe CrowdFund, type: :model do

  describe "#charge_funders" do
    context "7 funders" do

      context "stripe raises no errors" do
        it "charges 7 funders" do
        end
      end

      context "stripe raises errors on the first two" do
        it "charges 5 funders" do
        end
      end

    end
  end

end
