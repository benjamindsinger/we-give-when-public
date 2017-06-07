class AddNameToCauses < ActiveRecord::Migration[5.0]
  def change
    add_column :causes, :name, :string, null: false
  end
end
