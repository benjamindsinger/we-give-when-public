require "administrate/base_dashboard"

class FunderDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    crowd_fund_memberships: Field::HasMany,
    stripe_customer_id: Field::String,
    first_name: Field::String,
    last_name: Field::String,
    occupation: Field::String,
    employer: Field::String,
    email: Field::String,
    phone: Field::String,
    address: Field::String,
    city: Field::String,
    us_state: Field::String,
    zip: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :first_name,
    :last_name,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :stripe_customer_id,
    :first_name,
    :last_name,
    :occupation,
    :employer,
    :email,
    :phone,
    :address,
    :city,
    :us_state,
    :zip,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :first_name,
    :last_name,
    :occupation,
    :employer,
    :email,
    :phone,
    :address,
    :city,
    :us_state,
    :zip,
  ].freeze

  # Overwrite this method to customize how funders are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(funder)
    "#{funder.first_name} #{funder.last_name}"
  end
end
