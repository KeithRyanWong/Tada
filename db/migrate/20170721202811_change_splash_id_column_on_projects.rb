class ChangeSplashIdColumnOnProjects < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :splash_id, 'integer USING CAST(splash_id AS integer)'
  end
end
