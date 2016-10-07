class Api::NotesController < ApplicationController
  def index
    @notes = Note.all.where(user_id: current_user.id).includes(:collections)
  end

  def show
    if current_user.notes.exists?(params[:id].to_i)
      @note = Note.find(params[:id].to_i)
      render :show
    else
      render json: ["Not found"], status: 404
    end
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id;

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    if current_user.notes.exists?(params[:id].to_i)
      @note = Note.find(params[:id].to_i)

      if @note.update(note_params)
        render :show
      else
        render json: @note.errors.full_messages, status: 422
      end
    else
      render json: ["Not found"], status: 404
    end
  end

  def destroy
    if  current_user.notes.exists?(params[:id].to_i)
      @note = Note.find(params[:id].to_i)

      if @note.destroy
        render :show
      else
        render json: ["Unsuccessful delete request"], status: 404
      end
    else
      render json: ["Not found"], status: 404
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :color, :image_url, collection_ids: [])
  end
end
