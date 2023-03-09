Rails.application.routes.draw do
  resources :drink_ingredients, only: [:index, :show], defaults: { format: :json }
  resources :ingredients, only: [:index, :show], defaults: { format: :json }
  root 'homepage#index'
  get '/api/drinks/:id', to: 'drinks#show'
  get '/api/drinks', to: 'drinks#index'
  match '*path' => 'homepage#index', via: :all
  namespace :api do
    resources :drinks, only: [:show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
