class Entry < ActiveRecord::Base
  validates :age, presence: true
  validates :submit_type, presence: true
  validates :gender, presence: true
  validates :education, presence: true
  validates :salary_2013, presence: true, numericality: true
  validates :salary_guess_2013, presence: true, numericality: true

  EDUCATION_KEY_MAP = {'no-highschool' => "No High School Diploma", 'highschool' => "High School Diploma", 'associate' => "Associate Degree", 'bachelors' => "Bachelor's Degree", 'advanced' => "Advanced Degree"}

  AGE_KEY_MAP = {'agerange1' => "15 to 24", 'agerange2' => "25 to 29", 'agerange3' => "30 to 34", 'agerange4' => "35 to 39", 'agerange5' => "40 to 44", 'agerange6' => "45 to 49", 'agerange7' => "50 to 54", 'agerange8' => "55 to 59", 'agerange9' => "60 to 64", 'agerange10' => "65 to 69", 'agerange11' => "70 to 74", 'agerange12' => "75 and over"}

end
  
