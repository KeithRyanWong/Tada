class AddBioToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :bio, :text
    add_column :users, :facebook, :string
    add_column :users, :twitter, :string
    add_column :users, :pinterest, :string
    add_column :users, :instagram, :string
    add_column :users, :website, :string
    add_column :users, :location, :string
  end
end
