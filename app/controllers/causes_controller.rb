class CausesController < ApplicationController

  before_action :authenticate_cause_admin!
  before_action :authenticate_correct_cause

  def acceptance
    @cause = Cause.find_by_id(params[:id])
  end

  private

  def authenticate_correct_cause
    correct_cause = current_cause_admin.cause

    if Cause.find_by_id(params[:id]) != correct_cause
      redirect_to root_url, alert: 'That\'s not your cause, don\'t play.'
    end
  end

end
