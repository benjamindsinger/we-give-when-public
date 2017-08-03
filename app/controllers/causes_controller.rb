class CausesController < ApplicationController

  before_action :authenticate

  def acceptance
    @cause = Cause.find_by_id(params[:id])
  end

  private

  def authenticate
    correct_cause = current_cause_admin.cause

    if crowd_fund.cause != correct_cause
      redirect_to root_url, alert: 'That\'s not your cause, don\'t play.'
    end
  end

end
