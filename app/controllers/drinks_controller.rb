class DrinksController < ApplicationController
  def index
    @drinks = Drink.all
    render template: 'layouts/drinks/index'
  end
end
