class CrowdFund < ApplicationRecord
  require 'SendGridEmails'
  include FriendlyId
  friendly_id :name, :use => [:slugged]
  has_many :crowd_fund_memberships
  belongs_to :cause
  validates :cause, presence: true

  def name_except_for_fight_for_15
    return 'Will Guzzardi' if name === 'Fight for $15'

    return name
  end

  def disclaimer_paragraphs_for_form
    disclaimer_paragraphs.join(" // ")
  end

  def charge_funders(number_of_triggers,
                     api_to_charge = Stripe::Charge,
                     log=STDOUT)

    log.write("Preparing to charge #{crowd_fund_memberships.size} funders...")
    log.write("\n")

    success_count = 0
    error_count = 0
    inactive = crowd_fund_memberships.where.not(status: 'active')
    inactive_count = inactive.size
    active_memberships = crowd_fund_memberships.select{|cfm| cfm.status == "active"}

    active_memberships.each do |membership|
      # begin
        log.write("💸 Charging someone...")
        log.write("\n\n")

        if flat_monthly_amount
          membership.charge_member_for_month(api_to_charge)
        else
          membership.charge_member_based_on_triggers(number_of_triggers, api_to_charge)
        end

        success_count += 1
        log.write("✅ Succeeded!")

        # MonthlyChargesMailer.monthly_charge(membership).deliver_now
        SendGridEmails.monthly_charge(membership, number_of_triggers)

        log.write("\n\n")
      # rescue => error
      #   error_count += 1
      #   log.write("🚨 Error charging card! #{error}")
      #   log.write("\n\n")
      #   false
      # end
    end

    log.write("🙌 🙌 🙌 Successfully charged #{success_count} funders.")
    log.write("\n\n")
    log.write("🚨 🚨 🚨 Failed to charge #{error_count} funders.")
    log.write("\n\n")
    log.write("💀 💀 💀 Did not charge #{inactive_count} inactive funders.")
    log.write("\n\n")

    return crowd_fund_memberships
  end

  def url
    "https://wegivewhen.com/campaigns/#{slug}"
  end

end
