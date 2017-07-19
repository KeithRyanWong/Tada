class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]
  # before_action :require_permissions, only: [:update]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    # require_permissions(@user)
    @user.update(user_params)
    # render :show
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :image_url)
  end
end
