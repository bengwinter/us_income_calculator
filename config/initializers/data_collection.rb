require 'csv'
hash_2013 = {}
hash_2000 = {}
hash_ideal = {}


CSV.foreach(Rails.root.join('lib','assets','2013_percentile_data.csv')) do |row|
  key = row.shift
  hash_2013[key] = row
end

# CSV.foreach(Rails.root.join('lib','assets','data_2000.csv') do |row|
#   key = row.shift
#   hash_2000[key] = row
# end

# CSV.foreach(Rails.root.join('lib','assets','data_ideal.csv') do |row|
#   key = row.shift
#   hash_ideal[key] = row
# end

#Global Variable Declaration

DATA_2013 = hash_2013
# DATA_2000 = hash_2000
# DATA_IDEAL = hash_ideal