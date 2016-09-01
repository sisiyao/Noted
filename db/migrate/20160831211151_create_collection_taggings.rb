class CreateCollectionTaggings < ActiveRecord::Migration
  def change
    create_table :collection_taggings do |t|
      t.integer :note_id, null: false, index: true
      t.integer :collection_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
