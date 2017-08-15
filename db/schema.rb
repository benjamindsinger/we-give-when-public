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

ActiveRecord::Schema.define(version: 20170815182645) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cause_admins", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "super_admin", default: false, null: false
    t.integer "cause_id"
    t.index ["cause_id"], name: "index_cause_admins_on_cause_id"
    t.index ["email"], name: "index_cause_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_cause_admins_on_reset_password_token", unique: true
  end

  create_table "causes", id: :serial, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "stripe_account_id"
    t.string "name", null: false
    t.integer "tos_acceptance_date_in_seconds"
    t.inet "tos_acceptance_ip"
  end

  create_table "crowd_fund_memberships", id: :serial, force: :cascade do |t|
    t.integer "crowd_fund_id"
    t.integer "funder_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", null: false
    t.boolean "cover_fees", null: false
    t.integer "amount_per_time_in_cents"
    t.integer "monthly_maximum_in_cents"
    t.index ["crowd_fund_id"], name: "index_crowd_fund_memberships_on_crowd_fund_id"
    t.index ["funder_id"], name: "index_crowd_fund_memberships_on_funder_id"
  end

  create_table "crowd_funds", id: :serial, force: :cascade do |t|
    t.string "slug"
    t.string "name"
    t.json "page_data"
    t.datetime "goal_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cause_id"
    t.string "open_graph_title"
    t.string "open_graph_description"
    t.string "twitter_message"
    t.string "suggested_email_subject"
    t.string "suggested_email_body"
    t.integer "default_selected_amount_in_cents"
    t.integer "default_selected_monthly_maximum_in_cents"
    t.string "goal_type"
    t.integer "goal_amount"
    t.index ["cause_id"], name: "index_crowd_funds_on_cause_id"
  end

  create_table "friendly_id_slugs", id: :serial, force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "funders", id: :serial, force: :cascade do |t|
    t.string "stripe_customer_id"
    t.string "first_name"
    t.string "last_name"
    t.string "occupation"
    t.string "employer"
    t.string "email"
    t.string "phone"
    t.string "address"
    t.string "city"
    t.string "us_state"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "legal_entities", id: :serial, force: :cascade do |t|
    t.string "city"
    t.string "address_line1"
    t.string "postal_code"
    t.string "state"
    t.string "business_name"
    t.string "business_tax_id"
    t.datetime "dob"
    t.string "first_name"
    t.string "last_name"
    t.string "ssn_last_4"
    t.integer "cause_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cause_id"], name: "index_legal_entities_on_cause_id"
  end

  add_foreign_key "crowd_fund_memberships", "crowd_funds"
  add_foreign_key "crowd_fund_memberships", "funders", on_delete: :cascade
  add_foreign_key "crowd_funds", "causes"
  add_foreign_key "legal_entities", "causes"
end
