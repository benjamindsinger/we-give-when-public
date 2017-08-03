class AddTosFields < ActiveRecord::Migration[5.0]
  def change
    add_column :causes, :tos_acceptance_date, :datetime
    add_column :causes, :tos_acceptance_ip, :inet
  end
end
