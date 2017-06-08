Rails.application.routes.draw do
  devise_for :cause_admins, only: [:sessions, :passwords], path: ''

  root 'crowd_funds#index'

  post '/funders' => 'funders#create'

  resources :crowd_funds, path: 'campaigns', only: [:show, :index] do
    get :dashboard, on: :member
  end

  resources :causes, only: [] do
    get :sign_up, on: :member
    get :about, on: :collection
  end
end
