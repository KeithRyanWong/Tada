json.errors flash[:errors] ? flash[:errors] : []
json.byId do
  json.set! @item.id do
    json.extract! @item, :id, :project_id, :source_url, :description
  end
end