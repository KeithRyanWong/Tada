class Api::ItemsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update, :destroy]

  # def index
  #   @items = Project.find(params[:project_id]).items
  # end

  # def create
  #   @item = Item.new(item_params)
  #   require_item_owner
  #   if @item.save!
  # end

  # def show
  # end

  # def update
  # end

  # def destroy
  # end

  # private
  # def require_item_owner
  #   if Project.find(item_params[:project_id]).user.id != current_user.id 
  #     flash.now[:errors] = ["Unauthorized action"]
  #     render 'api/users/show', status: 401
  #   end
  # end

  def item_params
    params.require(:item).permit(:project_id, :source_url, :description)
  end
end
