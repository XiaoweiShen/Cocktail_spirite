class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :image
      t.string :tags
      t.references :glass, null: false, foreign_key: true
      t.string :instruction

      t.timestamps
    end
  end
end
