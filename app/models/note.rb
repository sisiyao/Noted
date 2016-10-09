class Note < ActiveRecord::Base
  validates :user_id, :color, presence: true

  belongs_to :user

  has_many :collection_taggings, dependent: :destroy, inverse_of: :note
  has_many :collections,
    through: :collection_taggings,
    source: :collection
end
