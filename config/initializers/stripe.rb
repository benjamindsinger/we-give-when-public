raise 'Stripe key missing!' unless (ENV['STRIPE_TEST_SECRET_KEY'] || Rails.env.test?)

Stripe.api_key = ENV['STRIPE_TEST_SECRET_KEY']
