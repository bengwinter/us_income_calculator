class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :zip_code
      t.integer :salary
      t.integer :asset_value
      t.text :race
      t.text :gender
      t.text :education
      t.text :industry
      #add user guesses columns to save
      t.timestamps
    end
  end
end
