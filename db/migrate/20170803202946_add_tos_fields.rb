class AddTosFields < ActiveRecord::Migration[5.0]
  def change
    add_column :causes, :tos_acceptance_date_in_seconds, :integer
    add_column :causes, :tos_acceptance_ip, :inet
  end
end
