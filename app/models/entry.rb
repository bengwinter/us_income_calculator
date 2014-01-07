class Entry < ActiveRecord::Base
  validates :geo_zone, presence: true
  validates :city_type, presence: true
  validates :age, presence: true
  validates :race, presence: true
  validates :gender, presence: true
  validates :education, presence: true
  validates :salary_2013, presence: true, numericality: true
  validates :salary_guess_2013, presence: true
  validates :income_happiness_2013, presence: true
  validates :overall_happiness_2013, presence: true
  validates :salary_2000, presence: true
  validates :salary_guess_2000, presence: true
  validates :income_happiness_2000, presence: true
  validates :overall_happiness_2000, presence: true

end
  
