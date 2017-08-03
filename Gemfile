source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'

gem 'airbrake', '~> 6.1'
gem 'devise'
gem 'friendly_id'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'
gem 'mini_racer', platforms: :ruby
gem 'money'
gem 'reek'
gem 'react_on_rails', '~> 7'
gem 'rubocop', '~> 0.49.1', require: false
gem 'sass-rails', '~> 5.0'
gem 'stripe'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'rspec-rails', '~> 3.5'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
