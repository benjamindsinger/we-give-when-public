crowd_funds = [
  {
    id: 1,
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
      subheadline: 'Big business is pulling the strings. Let’s fight back to support the people’s candidates.',
      headlineImgPath: '/fightfor15photo.jpg',

      # Content, give when blocks
      giveStatement: 'Chip in to support candidates who Fight for $15:',
      whenStatement: 'Every time an anti-living-wage writes a campaign check to an Illinois politician',
      progressStatusPhrase: '53 backers',
      progressGoalPhrase: 'of 100 backer goal',
      progressLeftPhrase: '47 backers needed',
      progressTimePhrase: '17 days left',
      contentSections: [
        {
          type: 'one_panel'
        },
        {
          type: 'statement'
        },
        {
          type: 'letter'
        },
        {
          type: 'disclaimer'
        },
        {
          type: 'final_ask'
        },
      ]
    }
  }
]

CrowdFund.create!(crowd_funds)
