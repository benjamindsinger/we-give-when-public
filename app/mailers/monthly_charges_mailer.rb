class MonthlyChargesMailer < ApplicationMailer
  require 'sendgrid-ruby'
  include SendGrid

  def monthly_charge(membership)
    @membership = membership
    @crowd_fund = membership.crowd_fund
    @funder = membership.funder
    mail(to: @membership.funder.email, subject: "WeGiveWhen: Your donation to '#{@crowd_fund.cause.name}' for the month of #{(Date.today - 1.month).strftime("%B %Y")}")
  end
end
