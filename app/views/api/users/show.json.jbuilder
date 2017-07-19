json.errors flash[:errors] ? flash[:errors] : []
json.currentUser(@user.nil? ? nil : @user.id)
