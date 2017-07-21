class AddItemOrderToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :item_order, :string, array: true, default: '{}'
  end
end
