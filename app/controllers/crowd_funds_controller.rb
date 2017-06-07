class CrowdFundsController < ApplicationController

  before_action :authenticate_cause_admin!, only: [:dashboard]
  before_action :check_crowd_fund_cause!, only: [:dashboard]

  def index
    @crowd_funds = CrowdFund.all
  end

  def show
    @crowd_fund = CrowdFund.friendly.find(params[:id])

    @stripe_publishable_key = ENV['STRIPE_PUBLISHABLE_KEY']

    @meta_og_url = "https://wegivewhen.com/#{@crowd_fund.slug}"
    @meta_content_twitter_card = "summary_large_image"

    if @crowd_fund.id == 1
      @component_name = "DemocracySpringPage"
      @funder_required_details = [
        'firstName', 'lastName', 'email', 'phone', 'zip',
      ]
      @meta_og_image = "https://wegivewhen.com/democracy-spring-capitol-small.jpg"
    elsif @crowd_fund.id == 2
      @component_name = "CrowdFundPage"
      @funder_required_details = [
        'firstName', 'lastName', 'occupation', 'employer', 'email',
        'phone', 'address', 'city', 'zip',
      ]
      @meta_og_image = "https://wegivewhen.com/fightfor15photoFB.jpg"
    end
  end

  def dashboard
    @crowd_fund = CrowdFund.includes(crowd_fund_memberships: [:funder])
                           .friendly.find(params[:id])

    dashboard_headers = [
      "Sign-Up Date",
      "Name",
      "Amount Per Event",
      "Monthly Maximum",
      "Occupation",
      "Employer",
      "Email",
      "Phone",
      "Address",
    ]

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

  private

  def check_crowd_fund_cause!
    return true if current_cause_admin.super_admin == true

    crowd_fund = CrowdFund.friendly.find(params[:id])
    correct_cause = current_cause_admin.cause

    if crowd_fund.cause != correct_cause
      redirect_to root_url, alert: 'That\'s not your crowd fund, don\'t play.'
    end
  end

  def to_csv(headers, rows)
    CSV.generate { |csv|
      csv << headers
      rows.each { |row| csv << row }
    }
  end

  def csv_filename
    "#{@crowd_fund.name} - "\
    "Give When - "\
    "#{DateTime.current.strftime("%-m/%e/%y %r")}.csv"
  end

end
