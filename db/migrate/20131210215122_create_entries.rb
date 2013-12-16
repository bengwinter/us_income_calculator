class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :zip_code
      t.integer :salary
      t.integer :asset_value
      t.integer :parents_asset_value
      t.integer :age
      t.text :race
      t.text :gender
      t.text :education
      t.integer :guess_income_rank
      t.integer :guess_wealth_rank
      t.timestamps
    end
  end
end
