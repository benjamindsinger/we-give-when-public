require 'json'

CrowdFundMembership.destroy_all
MonthlyTriggerCharge.destroy_all
CrowdFund.destroy_all
Cause.destroy_all
Funder.destroy_all

cause = Cause.create!(name: 'Fight for Pet Store')

c = CrowdFund.create!(
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

5.times do |i|

  new_stripe_customer = Stripe::Customer.create(
      :source => "tok_visa"
  )

  Funder.create(
    stripe_customer_id: new_stripe_customer.id,
    first_name: "Funder",
    last_name: "McFundee",
    occupation: "Doctor",
    employer: "Hospital",
    email: "rudyonrails@gmail.com",
    phone: "5551112222",
    address: "100 Maple Street",
    city: "Chicago",
    us_state: "IL",
    zip: "60657"
  )
end

Funder.all.each do |f|
  CrowdFundMembership.create(funder: f,
                             crowd_fund: c,
                             status: "active",
                             cover_fees: 34,
                             amount_per_time_in_cents: 100,
                             monthly_maximum_in_cents: 2000)
end
