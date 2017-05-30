class CrowdFundMembership < ApplicationRecord
  belongs_to :crowd_fund
  belongs_to :giver
end
