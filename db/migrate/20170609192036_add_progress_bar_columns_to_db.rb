class AddProgressBarColumnsToDb < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :goal_type, :string
    add_column :crowd_funds, :goal_amount, :integer
  end
end
