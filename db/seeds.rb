crowd_funds = [
  {
    id: 1,
    name: 'Democracy Spring',
    crowd_fund_type: 'COUNTDOWN',
    open_graph_title: 'Democrats Need Big Change',
    open_graph_description: 'Every day the DNC fails to break with Big Money interests, help #DemocracySpring build a movement to force a change.',
    twitter_message: "Every day the DNC fails to break with Big Money interests, help #DemocracySpring build a movement to force a change: https://wegivewhen.com/campaigns/democracy-spring",
    suggested_email_subject: 'Democrats Need Big Change',
    suggested_email_body: 'Hey: I just joined the campaign and I hope you will too. Every day the DNC fails to break with Big Money interests, help Democracy Spring build a movement to force a change: https://wegivewhen.com/campaigns/democracy-spring'
  },
  {
    id: 2,
    name: 'Fight for $15',
    crowd_fund_type: 'SLINGSHOT',
    open_graph_title: 'Join Will Guzzardi in the fight for $15.',
    open_graph_description: 'Every time an anti-living-wage corporation writes a campaign check, fight back.',
    twitter_message: "Every time an anti-living wage corp (@mcdonalds @walmart...) writes a campaign check, let's fight back ➡ https://wegivewhen.com/campaigns/fight-for-15 #fightfor15",
    suggested_email_subject: 'Fight for $15',
    suggested_email_body: 'Hey: I just joined the campaign and I hope you will too. Let\'s fight back every time an anti-living wage corporation like McDonalds writes a campaign check: https://wegivewhen.com/campaigns/fight-for-15'
  }
]

CrowdFund.create!(crowd_funds)
