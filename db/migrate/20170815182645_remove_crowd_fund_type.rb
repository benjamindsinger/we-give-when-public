class RemoveCrowdFundType < ActiveRecord::Migration[5.1]
  def change
    remove_column :crowd_funds, :crowd_fund_type
  end
end
