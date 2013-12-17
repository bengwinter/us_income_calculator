class Entry < ActiveRecord::Base
  validates :zip_code, presence: true, length: { is: 5 }
  validates :salary, presence: true, numericality: true
  validates :assets, presence: true, numericality: true
  validates :inherited_assets, presence: true, numericality: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 150 }
  validates :race, presence: true
  validates :gender, presence: true
  validates :education, presence: true
  validates :self_wealth_descr, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
  validates :self_happiness_descr, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
  validates :salary_guess, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :wealth_guess, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end


  