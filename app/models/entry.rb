class Entry < ActiveRecord::Base
  validates :geo_zone, presence: true
  validates :city_type, presence: true
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



  def find_percentile(key, income)
    percentiles = DATA_2013[key]
    i = 0
    while income > percentiles[i]
      i += 1
    end
    return i
  end

  def find_percentile_test(income)
    percentiles = [0,0,0,0,0,0,0,0,0,0,0,138,175,175,901,3596,3596,5985,6062,7005,8710,8710,8922,11122,11122,11122,11122,13616,13678,13678,15696,15921,15921,15921,17780,18597,18597,19469,20870,20870,20870,21285,23692,23692,24674,25771,25771,25771,27545,28533,29554,30730,30730,30730,31704,33612,35040,35781,35781,36904,38557,40117,40709,40709,41786,43868,45704,45704,47552,49087,50621,50621,51205,54076,55715,57353,60061,60621,61998,65079,66347,69683,70691,74087,75984,79790,81607,85816,89975,93240,139739,178282,178282,178282,178282,178282,178282,178282,178282,178282,178282]
    i = 0
    while income > percentiles[i]
      i += 1
    end
    return i
  end
end
  