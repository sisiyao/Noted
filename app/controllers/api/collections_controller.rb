class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.where(user_id: params[:user_id])
  end

  def create
    @collection = Collection.new(collection_params)

    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = Collection.find(params[:id])

    if @collection.update(collection_params)
      render :show
    else
      render json: @collection.errors.full_messages
    end
  end

  def destroy
    @collection = Collection.find(params[:id])

    if @collection.destroy
      render :show
    else
      render json: ["Unsuccessful delete request"], status: 404
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:name)
  end
end
