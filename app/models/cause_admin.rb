class CauseAdmin < ApplicationRecord
  devise :database_authenticatable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable

  belongs_to :cause, required: false
  validate :must_have_cause_unless_super_admin

  def must_have_cause_unless_super_admin
    if cause.nil?
      unless super_admin
        errors.add(:cause_id, "must have cause unless super admin")
      end
    end
  end

end
