Rails.application.routes.draw do
  # get 'sessions', to: "sessions#index"
  resources :tasks, :users
  post "login", to: "sessions#create"
end
