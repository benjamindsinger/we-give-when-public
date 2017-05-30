class CrowdFundsController < ApplicationController

  def index
    @crowd_funds = CrowdFund.all
  end

  def show
    @crowd_fund = CrowdFund.friendly.find(params[:id])
  end

end
