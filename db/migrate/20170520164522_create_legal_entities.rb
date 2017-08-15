class CreateLegalEntities < ActiveRecord::Migration[4.2]
  def change
    create_table :legal_entities do |t|
      t.string :city
      t.string :address_line1
      t.string :postal_code
      t.string :state
      t.string :business_name
      t.string :business_tax_id
      t.datetime :dob
      t.string :first_name
      t.string :last_name
      t.string :ssn_last_4
      t.references :cause, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
