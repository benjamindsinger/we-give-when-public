class AddOpenGraphImgPathToCrowdFunds < ActiveRecord::Migration[5.1]
  def change
    add_column :crowd_funds, :open_graph_img_path, :string
  end
end
