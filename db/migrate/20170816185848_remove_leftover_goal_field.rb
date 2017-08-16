class RemoveLeftoverGoalField < ActiveRecord::Migration[5.1]
  def change
    remove_column :crowd_funds, :goal_date
  end
end
