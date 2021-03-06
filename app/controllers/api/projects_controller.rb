class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]
  before_action :require_project_auth, only: [:update, :destroy]
  before_action :find_project, only: [:show]

  def index
    if params[:user_id].nil?
      @projects = Project.all.includes(likes: :user)
      @likes = []
      @projects.each do |project|
        @likes.push(
          project.likes.map do |like|
            like.user.id
          end
        )
      end
    else
      @projects = User.find(params[:user_id]).projects
    end
  end

  def show
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id

    if @project.save!
      render :show, status: 201
    else
      flash.now[:errors] = @project.errors.full_messages
      render :show, status: 422
    end
  end

  def update
    @project.update(project_params)

    flash.now[:errors] = @project.errors.full_messages
    render :show, status: 200
  end

  def destroy
    @project.destroy

    flash.now[:errors] = @project.errors.full_messages
    render :show
  end

  private

  def require_project_auth(&proc)
    find_project
    if @project.user.id != current_user.id
      flash.now[:errors] = ["Authorized login required"]
      render :show, status: 401
    end
  end
  
  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :splash_id, item_order: [])
  end
end
