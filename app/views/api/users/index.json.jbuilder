json.users do
  json.errors flash[:errors] ? flash[:errors] : []

  if @user.nil?
    json.byId do
      @users.each do |user|
        json.set! user.id do
          json.extract! user, :id, :first_name, :last_name, :username, :image_url
        # json.follow_ids user.follows
        end
      end
    end
  else
    json.byId do
      json.set! @user.id do
        json.extract! @user, :id, :first_name, :last_name, :username, :image_url
        json.projects @project_ids
        json.starredProjects @starred_project_ids
      # json.follow_ids user.follows
      end
    end
  end
end

if @projects
  json.projects do
    json.errors flash[:errors] ? flash[:errors] : []
    json.byId do
      @projects.each.with_index do |project, i|
        json.set! project.id do
          json.extract! project, :id, :title, :user_id, :splash_id, :item_order
          json.likes @likes[i]
        end
      end
    end
  end
  json.items do
    json.byId do
      @projects.each do |project|
        project.items.each do |item|  
          json.set! item.id do
            json.extract! item, :id, :source_url, :description, :project_id, :source_type
          end
        end
      end
    end
  end
end