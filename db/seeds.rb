require 'json'

CrowdFundMembership.destroy_all
CrowdFund.destroy_all
Cause.destroy_all

CauseAdmin.create(
  email: ENV.fetch('ALEX_EMAIL'),
  password: ENV.fetch('ALEX_PASSWORD'),
  super_admin: true
)
