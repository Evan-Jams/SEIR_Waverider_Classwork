class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :name
      t.integer :value
      t.string :occasion
      t.string :receiver
    end
  end
end
