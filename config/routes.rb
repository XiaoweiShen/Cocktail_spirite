Rails.application.routes.draw do
  get 'glasses/index'
  get 'glasses/show'
  get 'drink_ingredients/index'
  get 'drink_ingredients/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :drinks,only: [:index, :show, :edit, :update]
  resources :ingredients,only: [:index, :show]
  resources :glasses, only: [:index, :show]
  resources :drink_ingredients, only: [:show]
end
