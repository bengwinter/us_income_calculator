class Entry < ActiveRecord::Base
  validates :zip_code, presence: true
  validates :salary, presence: true
  validates :assets, presence: true
  validates :inherited_assets, presence: true
  validates :age, presence: true
  validates :race, presence: true
  validates :gender, presence: true
  validates :education, presence: true
  validates :self_wealth_descr, presence: true
  validates :self_happiness_descr, presence: true
  validates :salary_guess, presence: true
  validates :wealth_guess, presence: true, length: { maximum: 2}
  validates :output_income_rank, presence: true
  validates :output_wealth_rank, presence: true
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create
  validates_numericality_of :zip_code, on: :create


  # validates :name, length: { minimum: 2 }
  # validates :bio, length: { maximum: 500 }
  # validates :password, length: { in: 6..20 }
  # validates :registration_number, length: { is: 6 }
end


  