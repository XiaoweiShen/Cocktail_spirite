class DrinksController < ApplicationController

  def index
    if request.format.html?
      render 'index.html.erb'
    else
      head :no_content
    end
  end

end