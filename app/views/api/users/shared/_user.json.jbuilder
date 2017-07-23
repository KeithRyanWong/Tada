json.errors flash[:errors] ? flash[:errors] : []
json.id(user.nil? ? nil : user.id)
json.image_url(user.nil? ? '' : user.image_url)