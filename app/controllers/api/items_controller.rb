class Api::ItemsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  before_action :require_item_owner, only: [:update, :destroy]
  before_action :find_item, only: [:show]

  def index
    @items = Project.find(params[:project_id]).items
  end

  def create
    @item = Item.new(item_params)

    if @item.save!
      render :show, status: 201
    else
      flash.now[:errors] = @item.errors.full_messages
      render :show, 422
    end
  end

  def show
  end

  def update
     @item.update(item_params)

     flash.now[:errors] = @item.errors.full_messages
     render :show
  end

  def destroy
    @item.destroy
    project = @item.project
    newItemOrder = project.item_order
    newItemOrder.delete(@item.id.to_s)

    project.update(item_order: newItemOrder)

    flash.now[:errors] = project.errors.full_messages + @item.errors.full_messages
    render :show
  end

  private
  def require_item_owner
    find_item
    @project = @item.project
    if @project.user.id != current_user.id 
      flash.now[:errors] = ["Unauthorized action"]
      render :show, status: 401
    end
  end

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:project_id, :source_url, :description)
  end
end
