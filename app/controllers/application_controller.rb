class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def logged_in?
    !!current_user
  end
  
  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    # renders as {"errors": ["Login required"]} 
    if !current_user
      flash.now[:errors] = ["Login required"]
      render 'api/users/show', status: 401 
    end
  end

  def require_logged_out
    if logged_in?
      flash.now[:errors] = ["Must be logged out to do that"]
      render 'api/users/show', status: 401 
    end
  end
end
