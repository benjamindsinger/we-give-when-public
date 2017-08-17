require "administrate/base_dashboard"

class CrowdFundDashboard < Administrate::BaseDashboard

  def display_resource(crowd_fund)
    crowd_fund.name
  end

  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    crowd_fund_memberships: Field::HasMany,
    cause: Field::BelongsTo,
    id: Field::Number,
    slug: Field::String,
    name: Field::String,
    page_data: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    open_graph_title: Field::String,
    open_graph_description: Field::String,
    twitter_message: Field::String,
    suggested_email_subject: Field::String,
    suggested_email_body: Field::String,
    default_selected_amount_in_cents: Field::Number,
    default_selected_monthly_maximum_in_cents: Field::Number,
    monthly_max_multiplier: Field::Number,
    foe_header: Field::String,
    foe_subhead: Field::String,
    foe_img_url: ImageField,
    foe_hex: Field::String,
    friend_header: Field::String,
    friend_subhead: Field::String,
    friend_img_url: ImageField,
    friend_hex: Field::String,
    call_to_action_sentence: Field::String,
    theory_of_change_sentence: Field::String,
    logo_img_path: ImageField,
    sign_up_button_hex: Field::String,
    disclaimer_paragraphs: Field::Text,
    open_graph_img_path: ImageField,
    url: LinkField,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :name,
    :foe_header,
    :friend_header,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :default_selected_amount_in_cents,
    :monthly_max_multiplier,
    :foe_header,
    :foe_subhead,
    :foe_img_url,
    :foe_hex,
    :friend_header,
    :friend_subhead,
    :friend_img_url,
    :friend_hex,
    :call_to_action_sentence,
    :theory_of_change_sentence,
    :logo_img_path,
    :disclaimer_paragraphs,
    :open_graph_img_path,
    :open_graph_title,
    :open_graph_description,
    :twitter_message,
    :suggested_email_subject,
    :suggested_email_body,
  ].freeze

  SHOW_PAGE_ATTRIBUTES = FORM_ATTRIBUTES.dup

  SHOW_PAGE_ATTRIBUTES.unshift(:url)
end
