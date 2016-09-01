class Note < ActiveRecord::Base
  validates :title, :user_id, :color, presence: true

  has_many :collection_taggings
  
  has_many :collections,
    through: :collection_taggings,
    source: :collection
end
