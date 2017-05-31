class AddColumnsToCrowdFunds < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :is_countdown, :boolean, null: false
    add_column :crowd_funds, :is_slingshot, :boolean, null: false
  end
end
