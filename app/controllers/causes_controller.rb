class CausesController < ApplicationController

  before_action :authenticate_cause_admin!
  before_action :authenticate_correct_cause

  def acceptance
    @cause = Cause.find_by_id(params[:id])
  end

  def update_terms_of_service_acceptance
    @cause = Cause.find_by_id(params[:id])
    @stripe_account_id = @cause.stripe_account_id

    raise "No stripe cause ID in our database!" unless @stripe_account_id

    @cause = Cause.find_by_id(params[:id])
    @now = Time.now.to_i
    @ip = request.remote_ip # Assumes you're not using a proxy

    acct = Stripe::Account.retrieve(@stripe_account_id)
    acct.tos_acceptance.date = @now
    acct.tos_acceptance.ip = @ip

    if acct.save
      if @cause.update({ tos_acceptance_date: @now, tos_acceptance_ip: @ip })
        redirect_to dashboard_crowd_fund_url(@cause.crowd_funds.first)
      end
    end
  end

  private

  def authenticate_correct_cause
    correct_cause = current_cause_admin.cause

    if Cause.find_by_id(params[:id]) != correct_cause
      redirect_to root_url, alert: 'That\'s not your cause, don\'t play.'
    end
  end

end
