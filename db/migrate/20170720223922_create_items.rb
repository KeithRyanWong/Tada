class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :project_id, null: false
      t.string :source_url, null: false
      t.text :description

      t.timestamps
    end

    add_index :items, :project_id
  end
end
