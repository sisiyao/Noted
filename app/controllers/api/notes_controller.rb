class Api::NotesController < ApplicationController
  def index
    if params[:collection_name]
      @notes = Note.all.joins(:collections)
        .where(user_id: current_user.id)
        .where("collections.name = ?", params[:collection_name])
        .includes(:collections)
    elsif params[:search]
      search_term = params[:search].downcase
      @notes = Note.all.where("notes.user_id = ?", current_user.id)
        .joins("LEFT JOIN collection_taggings ON notes.id = collection_taggings.note_id")
        .joins("LEFT JOIN collections ON collection_taggings.collection_id = collections.id")
        .where("lower(notes.title) LIKE ? OR lower(notes.body) LIKE ? OR lower(collections.name) LIKE ?",
          "%#{search_term}%", "%#{search_term}%", "%#{search_term}%")
        .includes(:collections)
    else
      @notes = Note.all.where(user_id: current_user.id).includes(:collections)
    end
  end

  def show
    if current_user.notes.exists?(params[:id].to_i)
      @note = Note.find(params[:id].to_i)
      @status = "found"
      render :show
    else
      render json: ["Not found"], status: 404
    end
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id;
    @status = "created"

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    if current_user.notes.exists?(params[:id].to_i)
      @note = Note.find(params[:id].to_i)
      @status = "updated"

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
      @status = "deleted"

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
