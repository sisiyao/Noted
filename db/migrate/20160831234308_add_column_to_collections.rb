class AddColumnToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :user_id, :integer, null: false
  end
end
