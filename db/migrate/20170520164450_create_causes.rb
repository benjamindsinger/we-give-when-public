class CreateCauses < ActiveRecord::Migration[4.2]
  def change
    create_table :causes do |t|

      t.timestamps null: false
    end
  end
end
