class Api::LikesController < ApplicationController
  before_action :require_logged_in
  
  def create
    @like = Like.new(user_id: current_user.id, 
                  project_id: params[:project_id])
    @like.save
    render json: @like
  end

  def destroy
    @like = current_user.likes.where(project_id: params[:project_id])[0]

    @like.destroy

    render json: @like
  end
end
