class ReferenceCausesToCrowdFunds < ActiveRecord::Migration[5.0]
  def change
    add_reference :crowd_funds, :cause, index: true, foreign_key: true
  end
end
