class RemoveAllTheGoalTypeStuff < ActiveRecord::Migration[5.1]
  def change
    remove_column :crowd_funds, :goal_type
    remove_column :crowd_funds, :goal_amount
  end
end
