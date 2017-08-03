class CausesController < ApplicationController

  before_action :authenticate_cause_admin!
  before_action :authenticate_correct_cause

  def acceptance
    @cause = Cause.find_by_id(params[:id])
  end

  def update_terms_of_service_acceptance
    @cause = Cause.find_by_id(params[:id])
    acct = Stripe::Account.retrieve(@cause.stripe_account_id)
    acct.tos_acceptance.date = Time.now.to_i
    acct.tos_acceptance.ip = request.remote_ip # Assumes you're not using a proxy
    acct.save

    redirect_to dashboard_crowd_fund_url(@cause.crowd_funds.first)
  end

  private

  def authenticate_correct_cause
    correct_cause = current_cause_admin.cause

    if Cause.find_by_id(params[:id]) != correct_cause
      redirect_to root_url, alert: 'That\'s not your cause, don\'t play.'
    end
  end

end
