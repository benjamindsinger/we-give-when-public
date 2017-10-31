class CreateMonthlyTriggerCharges < ActiveRecord::Migration[5.1]
  def change
    create_table :monthly_trigger_charges do |t|
      t.references :crowd_fund, foreign_key: true
      t.integer :number_of_triggers

      t.timestamps
    end
  end
end
