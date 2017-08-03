require 'csv'

class CrowdFundsController < ApplicationController

  before_action :authenticate_cause_admin!, only: [:dashboard, :super_dashboard]
  before_action :check_crowd_fund_cause!, only: [:dashboard]
  before_action :check_super_admin!, only: [:super_dashboard]

  def index
    @crowd_funds_by_popularity = CrowdFund.all.sort_by do |crowd_fund|
      crowd_fund.crowd_fund_memberships.count
    end.reverse
  end

  def show
    @crowd_fund = CrowdFund.friendly.find(params[:id])

    if @crowd_fund.id == 2
      @funder_required_details = [
        'firstName', 'lastName', 'occupation', 'employer', 'email',
        'phone', 'address', 'city', 'usState', 'zip',
      ]
    else
      @funder_required_details = [
        'firstName', 'lastName', 'email', 'phone', 'city', 'usState', 'zip',
      ]
    end
  end

  def v2
    @funder_required_details = [
      'firstName', 'lastName', 'occupation', 'employer', 'email',
      'phone', 'address', 'city', 'usState', 'zip',
    ]
  end

  def dashboard
    @crowd_fund = CrowdFund.includes(crowd_fund_memberships: [:funder])
                           .friendly.find(params[:id])

    @cause = @crowd_fund.cause

    @membership_headers = CrowdFundMembership.dashboard_row_headers

    @membership_rows = @crowd_fund.crowd_fund_memberships.order(created_at: :desc).map do |membership|
      membership.to_dashboard_row
    end

    respond_to do |format|
      format.html
      format.csv {
        send_data to_csv(@membership_headers, @membership_rows), filename: csv_filename
      }
    end
  end

  def super_dashboard
    @crowd_fund_memberships = CrowdFundMembership.all

    @membership_headers = CrowdFundMembership.super_dashboard_row_headers

    @membership_rows = @crowd_fund_memberships.order(:crowd_fund_id, created_at: :desc).map do |membership|
      membership.to_super_dashboard_row
    end

    respond_to do |format|
      format.html
      format.csv {
        send_data to_csv(@membership_headers, @membership_rows), filename: csv_filename
      }
    end
  end

  private

  def check_crowd_fund_cause!
    return true if current_cause_admin.super_admin == true

    crowd_fund = CrowdFund.friendly.find(params[:id])
    correct_cause = current_cause_admin.cause

    if crowd_fund.cause != correct_cause
      redirect_to root_url, alert: 'That\'s not your crowd fund, don\'t play.'
    end
  end

  def check_super_admin!
    return true if current_cause_admin.super_admin == true

    redirect_to root_url, alert: 'That\'s not your crowd fund, don\'t play.'
  end

  def to_csv(headers, rows)
    CSV.generate { |csv|
      csv << headers
      rows.each { |row| csv << row }
    }
  end

  def csv_filename
    "#{@crowd_fund.name} - "\
    "GiveWhen - "\
    "#{DateTime.current.strftime("%-m/%e/%y %r")}.csv"
  end

end
