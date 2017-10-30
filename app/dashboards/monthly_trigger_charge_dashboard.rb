require "administrate/base_dashboard"

class MonthlyTriggerChargeDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    crowd_fund: Field::BelongsTo,
    number_of_triggers: Field::Number,
    created_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = ATTRIBUTE_TYPES.keys.freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = ATTRIBUTE_TYPES.keys.freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :crowd_fund,
    :number_of_triggers,
  ].freeze

  # Overwrite this method to customize how funders are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(funder)
  #   "#{funder.first_name} #{funder.last_name}"
  # end
end
