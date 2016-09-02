class Collection < ActiveRecord::Base
  validates :name, :user, presence: true

  belongs_to :user

  has_many :collection_taggings

  has_many :notes,
    through: :collection_taggings,
    source: :note
end
