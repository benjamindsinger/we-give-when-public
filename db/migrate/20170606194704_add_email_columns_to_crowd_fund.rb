class AddEmailColumnsToCrowdFund < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :suggested_email_subject, :string
    add_column :crowd_funds, :suggested_email_body, :string
  end
end
