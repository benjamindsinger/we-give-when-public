require "administrate/base_dashboard"

class CrowdFundMembershipDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    crowd_fund: Field::BelongsTo,
    funder: Field::BelongsTo,
    id: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    status: Field::String,
    cover_fees: Field::Boolean,
    amount_per_time_in_cents: Field::Number,
    monthly_maximum_in_cents: Field::Number,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :crowd_fund,
    :funder,
    :id,
    :created_at,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :crowd_fund,
    :funder,
    :id,
    :created_at,
    :updated_at,
    :status,
    :cover_fees,
    :amount_per_time_in_cents,
    :monthly_maximum_in_cents,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :crowd_fund,
    :funder,
    :status,
    :cover_fees,
    :amount_per_time_in_cents,
    :monthly_maximum_in_cents,
  ].freeze

  # Overwrite this method to customize how crowd fund memberships are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(crowd_fund_membership)
  #   "CrowdFundMembership ##{crowd_fund_membership.id}"
  # end
end
