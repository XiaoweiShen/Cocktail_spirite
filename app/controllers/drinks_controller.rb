class DrinksController < ApplicationController

  def index
		@drinks = Drink.all
		render :json => @drinks
    @drink_ingredients = @drink.drink_ingredients.includes(:ingredient)
  end

  def show
    @drink = Drink.find(params[:id])
    render json: @drink
  end
  
end
