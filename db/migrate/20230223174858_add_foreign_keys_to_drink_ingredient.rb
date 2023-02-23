class AddForeignKeysToDrinkIngredient < ActiveRecord::Migration[6.1]
  def change
    add_column :drink_ingredients, :ingredient_id, :ingeger
    add_column :drink_ingredients, :ingredient_name, :string
  end
end
