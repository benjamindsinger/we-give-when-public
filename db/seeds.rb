causes = [
  {
    id: 1,
    name: 'Democracy Spring'
  },
  {
    id: 2,
    name: 'Committee to Elect Will Guzzardi'
  }
]

Cause.create!(causes)

crowd_funds = [
  {
    id: 1,
    cause_id: 1,
    name: 'Democracy Spring',
    crowd_fund_type: 'COUNTDOWN',

    # Defaults
    default_selected_amount_in_cents: 100,

    # Social
    open_graph_title: 'Democrats Need Big Change',
    open_graph_description: 'Every day the DNC fails to break with Big Money interests, help #DemocracySpring build a movement to force a change.',
    twitter_message: "Every day the DNC fails to break with Big Money interests, help #DemocracySpring build a movement to force a change: https://wegivewhen.com/campaigns/democracy-spring",
    suggested_email_subject: 'Democrats Need Big Change',
    suggested_email_body: 'Hey: I just joined the campaign and I hope you will too. Every day the DNC fails to break with Big Money interests, help Democracy Spring build a movement to force a change: https://wegivewhen.com/campaigns/democracy-spring',

    # JSON for landing page
    page_data: {
      colorScheme: 'red_blue',

      # Content, header
      headerGivePhrase: 'force a change',
      headerWhenPhrase: 'Until the DNC breaks with Big Money,',
      headerLogoImgPath: '/dem-spring-logo-blue.png',

      # Content, headline
      headline: 'Democrats Need Big Change',
      subheadline: 'Despite an overwhelming appetite for bold progressive change, the DNC continues to support an agenda backed by Big Money donors instead of everyday people. Let\'s build a movement to force a change.',
      headlineImgPath: '/day-one-banner-small.jpeg',

      # Content, give when blocks
      giveStatement: 'To support a progressive takeover of the Democratic Party',
      whenStatement: 'Every day the DNC fails to break with Big Money',
      progressStatusPhrase: '$53/day pledged',
      progressGoalPhrase: 'of $100 goal',
      progressLeftPhrase: ' $47/day needed',
      progressTimePhrase: '17 days left',
    }
  },

  {
    id: 2,
    cause_id: 2,
    name: 'Fight for $15',
    crowd_fund_type: 'SLINGSHOT',

    # Defaults
    default_selected_amount_in_cents: 300,
    default_selected_monthly_maximum_in_cents: 4500,

    # Social
    open_graph_title: 'Join Will Guzzardi in the fight for $15.',
    open_graph_description: 'Every time an anti-living-wage corporation writes a campaign check, fight back.',
    twitter_message: "Every time an anti-living wage corp (@mcdonalds @walmart...) writes a campaign check, let's fight back ➡ https://wegivewhen.com/campaigns/fight-for-15 #fightfor15",
    suggested_email_subject: 'Fight for $15',
    suggested_email_body: 'Hey: I just joined the campaign and I hope you will too. Let\'s fight back every time an anti-living wage corporation like McDonalds writes a campaign check: https://wegivewhen.com/campaigns/fight-for-15',

    # JSON for landing page
    page_data: {
      colorScheme: 'green_blue',

      # Content, header
      headerGivePhrase: 'fight back',
      headerWhenPhrase: 'Every time an anti-living-wage corporation writes a campaign check,',
      headerLogoImgPath: '/guzzardi-logo-good.jpg',

      # Content, headline
      headline: 'Elect Candidates Who Fight For $15',
      subheadline: "Big business has money, but we have people. Every time an anti-living-wage corporation in Illinois writes a big check, we need hundreds of people to make a small donation to living-wage campaigns.",
      headlineImgPath: '/fightfor15photo.jpg',

      # Content, give when blocks
      giveStatement: 'Chip in to support candidates who Fight for $15:',
      whenStatement: 'Every time an anti-living-wage corporation or PAC writes a campaign check to an Illinois politician...',
      progressStatusPhrase: '53 backers',
      progressGoalPhrase: 'of 100 backer goal',
      progressLeftPhrase: '47 backers needed',
      progressTimePhrase: '17 days left',

      disclaimerParagraphs: [
        "Funds go to the Committee to Elect Will Guzzardi, which supports the Fight for $15 and donates to candidates who also support the Fight for $15.",
        "Anti-living-wage corporate donations are tracked via Illinois Sunshine database, an open portal that tracks campaign finance.",
        "Paid for by the Committee to Elect Will Guzzardi. A copy of our report filed with the State Board of Elections is (or will be) available on the Board's official website (www.elections.il.gov) or for purchase from the State Board of Elections, Springfield, Illinois.",
      ],

      contentSections: [
        {
          type: 'one_panel',
          headline: "As long as big business pulls the strings in Springfield, we'll never raise the minimum wage",
          paragraphs: [
            "The Illinois legislature passed a $15 minimum wage this year. But Governor Rauner has promised to veto it, and big business will fight to make sure that veto stands.",
            "Walmart, McDonalds, the Chamber of Commerce, the Restaurant Association, and the Retail Merchants will be giving heavily to legislators to win their opposition to $15/hr.",
            "Every time they write a check of $100 or more, we need 100 people to automatically chip in to fight back."
          ],
        },
        {
          type: 'statement',
          content: 'Sign up as an automatic responder and get monthly updates from one of the organizers we hire.'
        },
        {
          type: 'letter',
          headline: 'We need to respond immediately so our candidates can campaign this summer in the primaries.',
          paragraphs: [
            "At the end of each month, depending on the number of checks written by corporate interests and the monthly maximum donation you set for yourself, we'll process your donation and put it to work immediately to campaign for our candidates.",

            "We'll send you a receipt and information each month about which corporations gave how much, and how your contribution helped fight back."
          ]
        },
        # {
        #   type: 'final_ask'
        # },
      ]
    }
  }
]

CrowdFund.create!(crowd_funds)
