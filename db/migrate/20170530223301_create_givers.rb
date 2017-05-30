class CreateGivers < ActiveRecord::Migration[5.0]
  def change
    create_table :givers do |t|
      t.string :stripe_customer_id
      t.string :first_name
      t.string :last_name
      t.string :occupation
      t.string :employer
      t.string :email
      t.string :phone
      t.string :address
      t.string :city
      t.string :us_state
      t.string :zip

      t.timestamps
    end
  end
end
