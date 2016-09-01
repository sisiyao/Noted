class CollectionTagging < ActiveRecord::Base
  validates :user_id, :collection_id, presence: true

  belongs_to :user
  
  belongs_to :collection
end
