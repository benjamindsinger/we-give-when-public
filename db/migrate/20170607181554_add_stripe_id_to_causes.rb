class AddStripeIdToCauses < ActiveRecord::Migration[5.0]
  def change
    add_column :causes, :stripe_account_id, :string
  end
end
