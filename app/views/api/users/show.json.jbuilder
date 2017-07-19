json.errors flash[:errors] ? flash[:errors] : []
json.id(@user.nil? ? nil : @user.id)
