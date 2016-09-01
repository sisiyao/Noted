class Collection < ActiveRecord::Base
  validates :name, presence: true

  has_many :collection_taggings
  
  has_many :notes,
    through: :collection_taggings,
    source: :note
end
