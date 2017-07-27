class Api::CommentsController < ApplicationController
  before_action :require_logged_in_for_creation, only: [:create]

  def index
    @comments = Comment.where(project_id: params[:project_id]).includes(user: :projects)

    @users = []
    @project_ids = []

    @comments.each do |comment|
      @users.push(comment.user)
      @project_ids.push(
        comment.user.projects.map do |project|
          project.id
        end
      )
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @users = []
    @comments = []
    
    if !current_user
      flash.now[:errors] = ["Login required"]
      render :index, status: 401
    elsif @comment.save!
      redirect_to "/api/projects/#{@comment.project_id}/comments"
    else
      flash.now[:errors] = @comment.errors.full_messages 
      render :index, status: 404
    end
  end

  private
  def require_logged_in_for_creation
    if !current_user
      @users = []
      @comments = []
      flash.now[:errors] = ["Login required"]
      render :index, status: 401 
    end
  end
  
  def comment_params
    params.require(:comment).permit(:project_id, :body)
  end
end
