require 'json'

CrowdFundMembership.destroy_all
CrowdFund.destroy_all
Cause.destroy_all

data_sources = [
  "a_safe_haven.json",
  "take_back_our_republic.json"
]

data_sources.each do |data_source|
  str = File.read("#{Rails.root}/db/data/" + data_source)
  json = JSON.parse(str)

  cause = Cause.create!(id: json["cause_id"], name: json["cause_name"])

  crowd_fund_attributes = json.except("cause_name", "cause_id")

  crowd_fund = CrowdFund.create!({cause: cause}.merge(crowd_fund_attributes))
end

CauseAdmin.create(
  email: ENV.fetch('ALEX_EMAIL'),
  password: ENV.fetch('ALEX_PASSWORD'),
  super_admin: true
)

CauseAdmin.create(
  email: ENV.fetch('BENJ_EMAIL'),
  password: ENV.fetch('BENJ_PASSWORD'),
  cause: Cause.first,
  super_admin: false
)
