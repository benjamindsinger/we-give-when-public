Rails.application.routes.draw do
  devise_for :cause_admins, only: [:sessions, :passwords], path: ''

  root 'crowd_funds#index'

  post '/funders' => 'funders#create'

  get '/privacy' => 'pages#privacy'
  get '/terms' => 'pages#terms'
  get '/sign_up' => 'pages#sign_up'

  resources :crowd_funds, path: 'campaigns', only: [:show, :index] do
    get :dashboard, on: :member
    get :super_dashboard, on: :collection
  end

  resources :causes, only: [] do
    get :acceptance, on: :member
    post :update_terms_of_service_acceptance, on: :member
  end
end
