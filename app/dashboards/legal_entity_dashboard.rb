require "administrate/base_dashboard"

class LegalEntityDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    cause: Field::BelongsTo,
    id: Field::Number,
    city: Field::String,
    address_line1: Field::String,
    postal_code: Field::String,
    state: Field::String,
    business_name: Field::String,
    business_tax_id: Field::String,
    dob: Field::DateTime,
    first_name: Field::String,
    last_name: Field::String,
    ssn_last_4: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :cause,
    :first_name,
    :last_name,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :cause,
    :city,
    :address_line1,
    :postal_code,
    :state,
    :business_name,
    :business_tax_id,
    :dob,
    :first_name,
    :last_name,
    :ssn_last_4,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :cause,
    :city,
    :address_line1,
    :postal_code,
    :state,
    :business_name,
    :business_tax_id,
    :dob,
    :first_name,
    :last_name,
    :ssn_last_4,
  ].freeze

  # Overwrite this method to customize how legal entities are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(legal_entity)
  #   "LegalEntity ##{legal_entity.id}"
  # end
end
