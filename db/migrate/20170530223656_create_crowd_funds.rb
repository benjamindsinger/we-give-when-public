class CreateCrowdFunds < ActiveRecord::Migration[5.0]
  def change
    create_table :crowd_funds do |t|
      t.string :slug
      t.string :name
      t.json :page_data
      t.datetime :goal_date

      t.timestamps
    end
  end
end
