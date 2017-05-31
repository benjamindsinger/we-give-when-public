class AddColumnsToCrowdFunds < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :crowd_fund_type, :string, null: false
  end
end
