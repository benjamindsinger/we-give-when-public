class AddTitleToLegalEntities < ActiveRecord::Migration[5.1]
  def change
    add_column :legal_entities, :title, :string
  end
end
