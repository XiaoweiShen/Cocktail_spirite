class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.pluck(:name,:image_s,:id).map{|name,image,id|{name:name,image:"https://" + URI::DEFAULT_PARSER.escape(image),id:id}} 
  end
end
