class CrowdFundsController < ApplicationController

  def index
    @crowd_funds = CrowdFund.all
  end

  def show
    @crowd_fund = CrowdFund.friendly.find(params[:id])
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
