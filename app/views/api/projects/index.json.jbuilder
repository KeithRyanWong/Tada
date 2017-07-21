json.errors flash[:errors] ? flash[:errors] : []
json.byId do
  @projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title, :user_id, :splash_id, :item_order
    end
  end
end