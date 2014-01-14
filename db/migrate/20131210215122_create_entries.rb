class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :salary_2013
      t.integer :salary_guess_2013
      t.text :submit_type
      t.integer :age
      t.text :geo_zone
      t.text :city_type
      t.text :race
      t.text :gender
      t.text :education
      t.timestamps
    end
  end
end