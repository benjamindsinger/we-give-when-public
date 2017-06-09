require 'json'

CrowdFundMembership.destroy_all
CrowdFund.destroy_all
Cause.destroy_all

data_sources = [
  "will_guzzardi_fight_for_fifteen.json",
  "democracy_spring.json",
  "inspiration_corp.json",
]

data_sources.each do |data_source|
  str = File.read("#{Rails.root}/db/data/" + data_source)
  json = JSON.parse(str)

  cause = Cause.create!(
    id: json["cause_id"],
    name: json["cause_name"]
  )

  crowd_fund_attributes = json.except("cause_name", "cause_id")

  crowd_fund = CrowdFund.create!(
    {cause: cause}.merge(crowd_fund_attributes)
  )
end
