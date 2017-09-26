class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    return after_sign_in_path_for_super_admin if resource.super_admin?

    return after_sign_in_path_for_cause_admin(resource)
  end

  private

    def after_sign_in_path_for_cause_admin(resource)
      crowd_fund = resource.cause.crowd_funds.first

      if crowd_fund
        dashboard_crowd_fund_url(crowd_fund)
      else
        root_url
      end
    end

    def after_sign_in_path_for_super_admin
      super_dashboard_crowd_funds_url
    end
end
