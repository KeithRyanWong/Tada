class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]

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
    if params[:id] != current_user.id.to_s
      render json: ["YOU CAN'T DO THAT", params[:id], current_user.id]
    else
      @user = User.find(params[:id])
      logout
      @user.update(user_params)
      login(@user)
      # render :show
      render json: @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :image_url)
  end
end
