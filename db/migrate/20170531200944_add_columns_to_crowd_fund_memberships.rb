class AddColumnsToCrowdFundMemberships < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_fund_memberships, :status, :string, null: false
    add_column :crowd_fund_memberships, :cover_fees, :boolean, null: false
    add_column :crowd_fund_memberships, :amount_per_time_in_cents, :integer
    add_column :crowd_fund_memberships, :monthly_maximum_in_cents, :integer
  end
end
