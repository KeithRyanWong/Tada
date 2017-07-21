json.errors flash[:errors] ? flash[:errors] : []
json.byId do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :project_id, :source_url, :description
    end
  end
end