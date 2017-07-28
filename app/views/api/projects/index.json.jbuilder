
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