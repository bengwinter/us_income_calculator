# b = {}
# File.open(Rails.root.join('lib','assets','data_2000.csv'), "r").each_line do |line|
#   record = line.chop.split(',')
#   key = record.pop #off first element
#   b[key] = record
# end

# DATA = b