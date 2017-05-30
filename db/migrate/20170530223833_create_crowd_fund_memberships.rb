class CreateCrowdFundMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :crowd_fund_memberships do |t|
      t.references :crowd_fund, index: true, foreign_key: true
      t.references :giver, index: true, foreign_key: true

      t.timestamps
    end
  end
end
