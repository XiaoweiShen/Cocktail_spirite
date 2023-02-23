class CreateDrinkIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :drink_ingredients do |t|
      t.references :drink, null: false, foreign_key: true
      t.integer :ingredient_id
      t.string :ingredient_name
      t.string :measure

      t.timestamps
    end
  end
end
