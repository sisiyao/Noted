class Collection < ActiveRecord::Base
  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to :user

  has_many :collection_taggings, dependent: :destroy, inverse_of: :collection
  has_many :notes,
    through: :collection_taggings,
    source: :note
end
