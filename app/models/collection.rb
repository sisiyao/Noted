class Collection < ActiveRecord::Base
  validates :name, :user, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to :user

  has_many :collection_taggings

  has_many :notes,
    through: :collection_taggings,
    source: :note
end
