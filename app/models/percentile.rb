class PercentileError < StandardError
end

class Percentile
  def initialize(data_hash)
    @percentile_hash = data_hash
  end


  def find(demographic, salary)
    raise PercentileError, "salary can't be negative" unless salary >= 0

    #finds percentile ranking for each demographic breakdown
      percentiles = @percentile_hash[demographic]
      #data hash should be length of 99/100 or raise exception
    #raise PercentileError, "incorrect number of percentiles in array" unless percentiles.length == 101
      if salary > percentiles.last
        next_highest = 98
      else
        next_highest = percentiles.find { |entry| entry > salary}
      end

      percentiles.index(next_highest)
  end

end