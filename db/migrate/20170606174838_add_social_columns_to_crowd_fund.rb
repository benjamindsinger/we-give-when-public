class AddSocialColumnsToCrowdFund < ActiveRecord::Migration[5.0]
  def change
    add_column :crowd_funds, :open_graph_title, :string
    add_column :crowd_funds, :open_graph_description, :string
    add_column :crowd_funds, :twitter_message, :string
  end
end
