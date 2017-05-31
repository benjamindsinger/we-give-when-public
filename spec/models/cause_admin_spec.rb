require "rails_helper"

RSpec.describe CauseAdmin, type: :model do

  describe "#must_have_cause_unless_super_admin" do

    let(:cause) { Cause.create! }

    context "regular admin" do

      context "with associated cause" do
        let(:admin) {
          CauseAdmin.new(
            email: 'test@example.com',
            password: 'testpassword',
            cause: cause
          )
        }

        it "is valid" do
          expect(admin).to be_valid
        end
      end

      context "without associated cause" do
        let(:admin) {
          CauseAdmin.new(
            email: 'test@example.com',
            password: 'testpassword'
          )
        }

        it "is not valid" do
          expect(admin).not_to be_valid
        end
      end

    end

    context "super admin" do
      context "with associated campagin" do
        let(:admin) {
          CauseAdmin.new(
            email: 'test@example.com',
            super_admin: true,
            password: 'testpassword',
            cause: cause
          )
        }

        it "is valid" do
          expect(admin).to be_valid
        end
      end

      context "without associated campagin" do
        let(:admin) {
          CauseAdmin.new(
            email: 'test@example.com',
            super_admin: true,
            password: 'testpassword'
          )
        }

        it "is valid" do
          expect(admin).to be_valid
        end
      end
    end

  end

end
