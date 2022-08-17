Rails.application.routes.draw do
  resources :tasks, :users

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
end
