class UseCascadingDeletes < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :crowd_fund_memberships, :funders
    add_foreign_key :crowd_fund_memberships, :funders, on_delete: :cascade
  end
end
