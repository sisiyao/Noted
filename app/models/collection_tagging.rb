class CollectionTagging < ActiveRecord::Base
  validates :note, :collection, presence: true
  validates :collection_id, uniqueness: { scope: :note_id }

  belongs_to :note
  belongs_to :collection
end
