Rails.application.routes.draw do
<<<<<<< HEAD
  resources :drink_ingredients, only: [:index, :show], defaults: { format: :json }
  resources :ingredients, only: [:index, :show], defaults: { format: :json }
=======
 
  resources :drinks,only: [:index, :show, :edit, :update]
  resources :ingredients,only: [:index, :show]
  resources :glasses, only: [:index, :show]
  resources :drink_ingredients, only: [:show]
>>>>>>> origin/master
  root 'homepage#index'
  get '/api/drinks/:id', to: 'drinks#show'
  get '/api/drinks', to: 'drinks#index'
  match '*path' => 'homepage#index', via: :all
<<<<<<< HEAD
  namespace :api do
    resources :drinks, only: [:show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
=======
>>>>>>> origin/master
end
