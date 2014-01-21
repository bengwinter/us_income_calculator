class PercentileError < StandardError
end

class Percentile
  def initialize(data_hash)
    #data hash should be length of 100 or raise exception
    @percentile_hash = data_hash
  end


  def find(descriminator, salary)
    raise PercentileError, "salary can't be negative" unless salary >= 0

    #Produces percentile rankings for 2013 income
      # p = 0
      percentiles = @percentile_hash[descriminator]
      if salary > perentiles.last
        next_highest = 100
      else
        next_highest = percentiles.find { |entry| entry > salary}
      end

      percentiles.index(next_highest)
      # l = percentiles.length
      # if salary > percentiles[(l-1)]
      #   p = 99
      # elsif salary <= percentiles[0]
      #   p = 1
      # else
      #   while salary > percentiles[p]
      #     p += 1
      #   end
      # end
      # if p >= 100
      #   p = 99
      # end
  end

end