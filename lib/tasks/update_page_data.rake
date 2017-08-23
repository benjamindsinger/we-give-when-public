namespace :crowd_funds do

  desc 'Reset primary key index'
  task reset_primary_key_index: :environment do
    ActiveRecord::Base.connection.reset_pk_sequence!('crowd_funds')
  end

  desc 'V2 Update page data'
  task update_page_data: :environment do
    democracy_spring = CrowdFund.find_or_create_by(id: 1, name: 'Democracy Spring')

    democracy_spring_v2_data = {
       defaultSelectedAmountInCents: 50,
       monthlyMaxMultiplier: 50,
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
       openGraphImgPath: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/democracy-spring/democracy-spring-marching-smaller.jpg',
       disclaimerParagraphs: [
         'Democracy Spring is a civil resistance movement organization committed to ending the corruption of big money in politics and protecting the right to vote for all people. Last year, we organized the largest American civil disobedience action of the 21st Century, with over 1,300 people arrested for sitting-in on the steps of the US Capitol. Since the 2016 election, we have organized mass protests against Trump and led sit-ins and nonviolent disruptions targeting Congress, Jeff Sessions, Neil Gorsuch, Senate Republicans, and the DNC.',
         'Contributions will be triggered when either Democracy Spring or a coalition in which Democracy Spring actively participates mobilizes someone to take nonviolent direct action. Each individual who takes nonviolent direct action will trigger a separate and distinct contribution. You will never be charged more than your monthly cap per month.',
         'Democracy Spring is a 501(c)(4) organization. Contributions are not tax deductible.',
       ]
    }

    democracy_spring_v2_data.transform_keys! { |key| key.to_s.underscore }

    democracy_spring.update(democracy_spring_v2_data)

    will_guzzardi = CrowdFund.find_or_create_by(id: 2, name: 'Fight for $15')

    will_guzzardi_v2_data = {
      defaultSelectedAmountInCents: 100,
      monthlyMaxMultiplier: 17,
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

    inspiration_corp = CrowdFund.find_or_create_by(id: 3, name: 'Inspiration Corporation')

    inspiration_corp_v2_data = {
      defaultSelectedAmountInCents: 100,
      monthlyMaxMultiplier: 20,

      foeHeader: 'This Chicago man is struggling with poverty.',
      foeSubhead: 'Political budget battles have left a gap of over a million dollars in our budget to serve Chicagoans in homelessness and poverty.',
      foeImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/inspiration-corp/Inspiration-Cafe-316-square.jpg',
      foeHex: '#f90016',
      friendImgUrl: 'https://s3-us-west-2.amazonaws.com/give-when/static-images/inspiration-corp/Inspiration-happy-square.jpg',
      friendHeader: 'We’re Inspiration Corporation, and with your help we can get him on his feet. ',
      friendSubhead: 'With dignity and respect, we help people in poverty improve their lives & increase self-sufficiency with social services, employment training, & housing.',
      friendHex: '#1c407b',
      callToActionSentence: 'Respond every time we take in someone in poverty:',
      theoryOfChangeSentence: 'If we all chip in a little bit to help people increase their self-sufficiency, together we can end homelessness.',
      logoImgPath: "https://s3-us-west-2.amazonaws.com/give-when/static-images/inspiration-corp/inspiration_logo.GIF",
      disclaimerParagraphs: [
        "Inspiration Corporation is a non-profit 501(c)(3) organization so donations are tax-deductible for federal income tax purposes. Our federal tax ID number is 36-3673980. Once enrolled, your gift will be made automatically each month. We will also remove you from our mailing lists, which means no more fundraising letters."
      ]
    }

    inspiration_corp_v2_data.transform_keys! { |key| key.to_s.underscore }

    inspiration_corp.update(inspiration_corp_v2_data)
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
