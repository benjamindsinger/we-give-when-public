require 'json'

CrowdFundMembership.destroy_all
CrowdFund.destroy_all
Cause.destroy_all

cause = Cause.create!(name: 'Fight for Pet Store')

CrowdFund.create!(
  cause: cause,
  name: 'Fight to Keep Our Fave Pet Store Open!',
  default_selected_amount_in_cents: 100,
  monthly_max_multiplier: 10,
  foe_header: 'The city wants to close our favorite pet store!',
  foe_subhead: 'They are really bad.',
  foe_img_url: nil,
  foe_hex: 'black',
  friend_header: 'We should keep it open!',
  friend_subhead: 'The puppies there are so cute.',
  friend_img_url: nil,
  friend_hex: 'blue',
  call_to_action_sentence: 'Donate every time a puppy barks.',
  theory_of_change_sentence: 'That way we\'ll win.',
  logo_img_path: nil,
  disclaimer_paragraphs: ['We Bear No Responsibility For Anything']
)

CauseAdmin.create!(
  email: "puppies@example.com",
  password: "puppies",
  super_admin: true
)
