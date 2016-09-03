class CollectionTagging < ActiveRecord::Base
  validates :user, :collection, presence: true

  belongs_to :user

  belongs_to :collection
end
