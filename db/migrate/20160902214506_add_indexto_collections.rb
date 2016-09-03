class AddIndextoCollections < ActiveRecord::Migration
  def change
    add_index :collections, [:user_id, :name], unique: true
  end
end
