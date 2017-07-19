json.errors flash[:errors] if flash[:errors]
json.currentUser(@user.nil? ? nil : @user.id)
