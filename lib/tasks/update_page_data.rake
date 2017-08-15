namespace :crowd_funds do

  desc 'V2 Update page data'
  task update_page_data: :environment do
    democracy_spring = CrowdFund.find_or_create_by(id: 1)

    democracy_spring_v2_data = {
       foeHeader: 'Our Country is in a Political Crisis',
       foeSubhead: 'Trump and the Republicans relentlessly attack our democracy, our communities, and our planet, while the Democrats refuse to learn from their failures and represent working people.',
       foeImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/democracy-spring/Square-Trump-Police-Brutality.jpg',
       foeHex: '#AA0000',
       friendHeader: 'We Need Nonviolent Direct Action to be Heard',
       friendSubhead: 'Democracy Spring will mobilize and train people from across the country to take bold nonviolent direct action to resist Trump and the GOP and to force the Democratic Party to break with Big Money and embrace a progressive agenda.',
       friendImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/democracy-spring/Square-RESIST-Black-and-White.jpg',
       friendHex: '#214478',
       callToActionSentence: 'Respond every time we mobilize an activist to take nonviolent direct action to defend democracy:',
       theoryOfChangeSentence: 'If enough people chip in to support the brave Americans stepping up to take action, we can build the powerful people\'s movement we need to fight back and push forward.',
       logoImgPath: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/democracy-spring/dem-spring-logo-quite-small.png',
    }

    democracy_spring_v2_data.transform_keys! { |key| key.to_s.underscore }

    democracy_spring.update(democracy_spring_v2_data)
  end

  desc 'OLD V1 Update page data'
  task update_page_data_v1: :environment do

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
