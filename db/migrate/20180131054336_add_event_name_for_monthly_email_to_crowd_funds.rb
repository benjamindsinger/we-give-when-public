class AddEventNameForMonthlyEmailToCrowdFunds < ActiveRecord::Migration[5.1]
  def change
    add_column :crowd_funds, :trigger_event_past_tense, :string
  end
end
