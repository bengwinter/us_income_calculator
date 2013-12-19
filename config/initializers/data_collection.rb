hash = {}
File.open(Rails.root.join('lib','assets','data_2013.csv'), "r").each_line do |line|
  record = line.chop.split(',')
  binding.pry
  key = record.pop #off first element
  b[key] = record
end

DATA = b