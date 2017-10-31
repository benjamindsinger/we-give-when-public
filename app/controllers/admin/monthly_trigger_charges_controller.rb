module Admin
  class MonthlyTriggerChargesController < Admin::ApplicationController

    def valid_action?(name, resource = resource_class)
      %w[edit].exclude?(name.to_s) && super
    end

  end
end
