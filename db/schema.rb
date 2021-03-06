# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161009070845) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collection_taggings", force: :cascade do |t|
    t.integer  "note_id",       null: false
    t.integer  "collection_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "collection_taggings", ["collection_id"], name: "index_collection_taggings_on_collection_id", using: :btree
  add_index "collection_taggings", ["note_id"], name: "index_collection_taggings_on_note_id", using: :btree

  create_table "collections", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id",    null: false
  end

  add_index "collections", ["user_id", "name"], name: "index_collections_on_user_id_and_name", unique: true, using: :btree

  create_table "notes", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "user_id",                      null: false
    t.string   "color",      default: "white", null: false
    t.string   "image_url"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "notes", ["user_id"], name: "index_notes_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
