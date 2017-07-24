class AddColumnToItemsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :source_type, :string
  end
end
