class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :geo_zone
      t.text :city_type
      t.integer :salary
      t.integer :assets
      t.integer :inherited_assets
      t.integer :age
      t.text :race
      t.text :gender
      t.text :education
      t.integer :self_wealth_descr
      t.integer :self_happiness_descr
      t.integer :salary_guess
      t.integer :wealth_guess
      t.integer :output_income_rank
      t.integer :output_wealth_rank
      t.timestamps
    end
  end
end
