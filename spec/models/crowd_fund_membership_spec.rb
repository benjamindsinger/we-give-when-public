require "rails_helper"

RSpec.configure do |c|
  c.extend Mocks
end

RSpec.describe CrowdFundMembership, type: :model do

  describe "#charge_member_based_on_triggers" do

    context 'active' do
      let(:membership) { CrowdFundMembership.create(status: 'active', cover_fees: true) }

      it 'charges' do
        expect(membership.charge_member_based_on_triggers).to eq 0
      end
    end

    context 'inactive' do
      let(:membership) { CrowdFundMembership.create(status: 'inactive', cover_fees: true) }

      it 'does not charge' do
        expect(membership.charge_member_based_on_triggers).to eq 0
      end
    end
  end

end
