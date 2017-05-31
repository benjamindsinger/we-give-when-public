class AddColumnsToCauseAdmin < ActiveRecord::Migration[5.0]
  def change
    add_column :cause_admins, :super_admin, :boolean, null: false, default: false
    add_reference :cause_admins, :cause, index: true
  end
end
