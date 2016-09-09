class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.where(user_id: current_user.id).order(:name)
  end

  def show
    if current_user.collections.exists?(params[:id].to_i)
      @collection = Collection.find(params[:id].to_i)
      @status = "found"
      render :show
    else
      render json: ["Not found"], status: 404
    end
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user = current_user;
    @status = "created"

    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    if  current_user.collections.exists?(params[:id])
      @collection = Collection.find(params[:id].to_i)
      @status = "updated"

      if @collection.update(collection_params)
        render :show
      else
        render json: @collection.errors.full_messages, status: 422
      end
    else
      render json: ["Not found"], status: 404
    end
  end

  def destroy
    if  current_user.collections.exists?(params[:id])
      @collection = Collection.find(params[:id].to_i)
      @status = "deleted"

      if @collection.destroy
        render :show
      else
        render json: ["Unsuccessful delete request"], status: 404
      end
    else
      render json: ["Not found"], status: 404
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:name)
  end
end
