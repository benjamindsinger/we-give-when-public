# All Administrate controllers inherit from this `Admin::ApplicationController`,
# making it the ideal place to put authentication logic or other
# before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_cause_admin!, :authenticate_super_admin!

    def authenticate_super_admin!
      return if current_cause_admin.super_admin == true

      redirect_to root_url, alert: 'That\'s not yours, don\'t play.'
    end

    def valid_action?(name, resource = resource_class)
      %w[destroy].exclude?(name.to_s) && super
    end

  end
end
