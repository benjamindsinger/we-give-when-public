class AddDefaultAmountsToCrowdFunds < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :default_selected_amount_in_cents, :integer
    add_column :crowd_funds, :default_selected_monthly_maximum_in_cents, :integer
  end
end
