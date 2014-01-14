class Entry < ActiveRecord::Base
  validates :age, presence: true
  validates :submit_type, presence: true
  validates :gender, presence: true
  validates :education, presence: true
  validates :salary_2013, presence: true, numericality: true
  validates :salary_guess_2013, presence: true, numericality: true

end
  
