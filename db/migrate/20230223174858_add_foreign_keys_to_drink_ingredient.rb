class AddForeignKeysToDrinkIngredient < ActiveRecord::Migration[6.1]
  def change
    # add_column :drink_ingredients, :ingredient_id, :ingeger
    # add_column :drink_ingredients, :ingredient_name, :string
    add_foreign_key :drink_ingredients, :ingredients
  end
end
