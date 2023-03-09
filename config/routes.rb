Rails.application.routes.draw do
 
  resources :drinks,only: [:index, :show, :edit, :update]
  resources :ingredients,only: [:index, :show]
  resources :glasses, only: [:index, :show]
  resources :drink_ingredients, only: [:show]
  root 'homepage#index'
  match '*path' => 'homepage#index', via: :all
end
