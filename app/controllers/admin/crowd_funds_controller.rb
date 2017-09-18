module Admin
  class CrowdFundsController < Admin::ApplicationController

    def valid_action?(name, resource = resource_class)
      %w[destroy].exclude?(name.to_s) && super
    end

    def find_resource(param)
      CrowdFund.find_by!(slug: param)
    end

    def resource_params
      params["crowd_fund"]["disclaimer_paragraphs"] = params["crowd_fund"]["disclaimer_paragraphs_for_form"].split(" // ") || []

      params.require("crowd_fund").permit(*dashboard.permitted_attributes, disclaimer_paragraphs: [])
    end

  end
end
