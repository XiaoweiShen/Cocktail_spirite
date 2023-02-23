class CreateGlasses < ActiveRecord::Migration[6.1]
  def change
    create_table :glasses do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
