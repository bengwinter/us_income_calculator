require 'csv'
hash_2013 = {}
hash_2000 = {}

#2013 CSV Parsing to create percentile groups
CSV.foreach(Rails.root.join('lib','assets','2013_percentile_data.csv')) do |row|
  key = row.shift
  income_values = []
  row.each do |x|
    income_values << x.to_i
  end
  hash_2013[key] = income_values
end

#2000 CSV Parsing to create percentile groups
CSV.foreach(Rails.root.join('lib','assets','2000_percentile_data.csv')) do |row|
  key = row.shift
  income_values = []
  row.each do |x|
    income_values << x.to_i
  end
  hash_2000[key] = income_values
end

#Global Variable Declaration

DATA_2013 = hash_2013
DATA_2000 = hash_2000

#Create 2013 Ideal and 2013 No Glass-Steagall Repeal Numbers
# IDEAL_2013 = DATA_2013["allallallall"]
# NOGS_2013 = DATA_2000["allallallall"]