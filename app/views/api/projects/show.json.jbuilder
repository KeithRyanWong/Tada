json.errors flash[:errors] ? flash[:errors] : []
json.byId do
  json.set! @project.id do
    json.extract! @project, :title, :user_id, :splash_id, :item_order
  end
end