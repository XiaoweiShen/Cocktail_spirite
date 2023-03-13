class DrinkIngredientsController < ApplicationController
  def index
    @drink_ingredients = DrinkIngredient.all
    render json: @drink_ingredients
  end

  def show
    @drink_ingredient = DrinkIngredient.find(params[:id])
    render json: @drink_ingredient
  end
end
