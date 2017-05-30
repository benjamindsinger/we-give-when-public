class CrowdFund < ApplicationRecord
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :campaign_memberships
  belongs_to :cause
end
