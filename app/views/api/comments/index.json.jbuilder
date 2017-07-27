
json.comments do
  json.errors flash[:errors] ? flash[:errors] : []
  json.byId do
    @comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :project_id, :user_id
        json.createdAt comment.created_at
      end
    end
  end
end
json.users do
  json.errors flash[:errors] ? flash[:errors] : []
  json.byId do
    @users.each.with_index do |user, i|
      json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :username, :image_url
        json.projects @project_ids[i]
      end
    end
  end
end