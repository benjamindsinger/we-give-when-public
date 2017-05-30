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

ActiveRecord::Schema.define(version: 20170530223656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "causes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "crowd_funds", force: :cascade do |t|
    t.string   "slug"
    t.string   "name"
    t.json     "page_data"
    t.datetime "goal_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "givers", force: :cascade do |t|
    t.string   "stripe_customer_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "occupation"
    t.string   "employer"
    t.string   "email"
    t.string   "phone"
    t.string   "address"
    t.string   "city"
    t.string   "us_state"
    t.string   "zip"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "legal_entities", force: :cascade do |t|
    t.string   "city"
    t.string   "address_line1"
    t.string   "postal_code"
    t.string   "state"
    t.string   "business_name"
    t.string   "business_tax_id"
    t.datetime "dob"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "ssn_last_4"
    t.integer  "cause_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["cause_id"], name: "index_legal_entities_on_cause_id", using: :btree
  end

  add_foreign_key "legal_entities", "causes"
end
