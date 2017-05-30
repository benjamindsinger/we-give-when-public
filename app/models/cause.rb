class Cause < ActiveRecord::Base
  has_one :legal_entity
  has_many :crowd_funds
end
