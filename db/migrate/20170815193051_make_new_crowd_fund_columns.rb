class MakeNewCrowdFundColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :crowd_funds, :monthly_max_multiplier, :integer

    # Foe
    add_column :crowd_funds, :foe_header, :string
    add_column :crowd_funds, :foe_subhead, :string
    add_column :crowd_funds, :foe_img_url, :string
    add_column :crowd_funds, :foe_hex, :string

    # Friend
    add_column :crowd_funds, :friend_header, :string
    add_column :crowd_funds, :friend_subhead, :string
    add_column :crowd_funds, :friend_img_url, :string
    add_column :crowd_funds, :friend_hex, :string

    # Sentences
    add_column :crowd_funds, :call_to_action_sentence, :string
    add_column :crowd_funds, :theory_of_change_sentence, :string
    add_column :crowd_funds, :logo_img_path, :string
    add_column :crowd_funds, :sign_up_button_hex, :string

    # Disclaimer
    add_column :crowd_funds, :disclaimer_paragraphs, :text, default: [], array: true
  end
end
