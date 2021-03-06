class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]
  before_action :require_logged_out, only: [:create]

  def index
    @users = User.all.includes(:projects)
  end

  def show
    @user = User.find(params[:id])
    @projects = (@user.projects + @user.liked_projects).uniq
    @likes = []
    @projects.each do |project|
      @likes.push(
        project.likes.map do |like|
          like.user.id
        end
      )
    end
    @project_ids = @user.projects.map do |project|
      project.id
    end
    @starred_project_ids = @user.liked_projects.map do |project|
      project.id
    end
    #can fetch user followed projects here once implemented
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :show, status: 422
    end
  end

  def update
    if params[:id] != current_user.id.to_s
      flash.now[:errors] = ["Authorized login required"]
      render :show, status: 401
    else
      @user = User.find(params[:id])
      logout

      @user.update(user_params)

      login(@user)

      flash.now[:errors] = @user.errors.full_messages
      render :show
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :image_url)
  end
end
