namespace :crowd_funds do

  desc 'V2 Update page data'
  task update_page_data: :environment do
    democracy_spring = CrowdFund.find_or_create_by(id: 1, name: 'Democracy Spring')

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

    will_guzzardi = CrowdFund.find_or_create_by(id: 2, name: 'Fight for $15')

    will_guzzardi_v2_data = {
      foeHeader: 'Big Business pays off politicians 17 times a month to stop a living wage.',
      foeSubhead: 'McDonald\'s, Walmart, and three corporate PACs are writing between 6 and 37 checks to Illinois politicians a month.',
      foeImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/guzzardi-fight-for-15/McDonalds-X-square.jpg',
      foeHex: 'black',
      friendHeader: 'I’m Will Guzzardi, and I’m supporting candidates
       like me who Fight for $15',
      friendSubhead: 'If we respond every time they buy off a politician, we can win enough House seats to override Rauner\'s veto and enact a $15 minimum wage.',
      friendImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/guzzardi-fight-for-15/Will-Guzzardi-square.jpg',
      friendHex: '#0055b8',
      callToActionSentence: 'Respond every time Big Business pays off a politician:',
      theoryOfChangeSentence: 'If we all chip in a little bit to counter corporate donations, together we can pass a living wage.',
      logoImgPath: "https://s3-us-west-2.amazonaws.com/give-when/static-images/guzzardi-fight-for-15/guzzardi-logo-good-small.jpg",
      disclaimerParagraphs: [
       "Funds go to the Committee to Elect Will Guzzardi, which supports the Fight for $15 and donates to candidates who also support the Fight for $15.",
       "Anti-living-wage corporate donations are tracked via Illinois Sunshine database, an open portal that tracks campaign finance.",
       "Paid for by the Committee to Elect Will Guzzardi. A copy of our report filed with the State Board of Elections is (or will be) available on the Board's official website (www.elections.il.gov) or for purchase from the State Board of Elections, Springfield, Illinois."
      ]
    }

    will_guzzardi_v2_data.transform_keys! { |key| key.to_s.underscore }

    will_guzzardi.update(will_guzzardi_v2_data)
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
