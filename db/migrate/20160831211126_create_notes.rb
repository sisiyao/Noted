class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id, null: false, index: true
      t.string :color, null: false, default: "white"
      t.string :image_url

      t.timestamps null: false
    end
  end
end
