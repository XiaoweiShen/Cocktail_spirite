Rails.application.routes.draw do
  root 'homepage#index'
  get '/api/drinks/:id', to: 'drinks#show'
  get '/api/drinks', to: 'drinks#index'
  match '*path' => 'homepage#index', via: :all
  namespace :api do
    resources :drinks, only: [:show]
  end
  # get '/Drinks', to: 'homepage#index'
  # get '/DrinkMixer', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
