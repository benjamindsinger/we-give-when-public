require "administrate/base_dashboard"

class CauseDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    legal_entity: Field::HasOne,
    crowd_funds: Field::HasMany,
    id: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    stripe_account_id: Field::String,
    name: Field::String,
    tos_acceptance_date_in_seconds: Field::Number,
    tos_acceptance_ip: Field::String.with_options(searchable: false),
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :name,
    :crowd_funds,
    :created_at,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :name,
    :crowd_funds,
    :legal_entity,
    :created_at,
    :updated_at,
    :stripe_account_id,
    :tos_acceptance_date_in_seconds,
    :tos_acceptance_ip,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :crowd_funds,
    :legal_entity,
  ].freeze

  # Overwrite this method to customize how causes are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(cause)
  #   "Cause ##{cause.id}"
  # end
end
