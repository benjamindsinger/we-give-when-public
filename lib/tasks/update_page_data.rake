namespace :crowd_funds do
  desc 'Update page data'
  task update_page_data: :environment do

    data_sources = [
      "will_guzzardi_fight_for_fifteen.json",
      "democracy_spring.json",
      "a_safe_haven.json",
      "inspiration_corp.json",
      "take_back_our_republic.json"
    ]

    data_sources.each do |data_source|
      str = File.read("#{Rails.root}/db/data/" + data_source)

      json = JSON.parse(str)

      crowd_fund = CrowdFund.find_by_id!(json["id"])

      crowd_fund.page_data = json["page_data"]

      crowd_fund.save!
    end

  end
end
