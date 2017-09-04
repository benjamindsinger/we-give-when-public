class AddFlatMonthlyAmountFieldToCrowdFund < ActiveRecord::Migration[5.1]
  def change
    add_column :crowd_funds, :flat_monthly_amount, :boolean, default: false
  end
end
