class DrinksController < ApplicationController

  def index
<<<<<<< HEAD
		@drinks = Drink.all
		render :json => @drinks
    @drink_ingredients = @drink.drink_ingredients.includes(:ingredient)
  end

  def show
    @drink = Drink.find(params[:id])
    render json: @drink
=======
    @drinks = Drink.pluck(:id, :name,:image,:tags).map{|i,n,img,t|{id:i,name:n,image:img,tags:t}} 
   # #render json: @drinks
    respond_to do |format|
        format.html # Render the HTML template
        format.json { render 'index.json.jbuilder' } # Render the JSON template
    end
  end

  def show
   @drink = Drink.find(params[:id])
   respond_to do |format|
    format.html # Render the HTML template
    format.json { render 'show.json.jbuilder' } # Render the JSON template
>>>>>>> origin/master
  end
  
end

end


# class DrinksController < ApplicationController

#   def index
#         @drinks = Drink.all
#         render :json => @drinks
#   end

#   def show
#     @drink = Drink.find(params[:id])
#     render json: @drink
#   end

# end