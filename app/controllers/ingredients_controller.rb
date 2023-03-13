class IngredientsController < ApplicationController
<<<<<<< HEAD

  def index
		@ingredients = Ingredient.all
		render :json => @ingredients
  end

  def show
    @ingredient = Ingredient.find(params[:id])
    render json: @ingredient
  end
  
=======
  def index
    @ingredients = Ingredient.pluck(:name,:image_s,:id).map{|name,image,id|{name:name,image:"https://" + URI::DEFAULT_PARSER.escape(image),id:id}} 
    respond_to do |format|
      format.html # Render the HTML template
      format.json { render 'index.json.jbuilder' } # Render the JSON template
  end
  end
>>>>>>> origin/master
end
