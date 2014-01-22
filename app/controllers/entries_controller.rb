class EntriesController < ApplicationController
  def index
  end

  def submit
    #Creates descriptors for user interface
    @descriptors = []
    @gender_descriptor = params["gender"].capitalize
    @education_descriptor = Entry::EDUCATION_KEY_MAP[params["education"]]
    @age_descriptor = Entry::AGE_KEY_MAP[params["age"]]
    
    #Creates income variables including 2000 income based on 2013 Salary and ratio from CPI
    @income_2013 = params["salary_2013"].to_i
    @income_guess_2013 = params["salary_guess_2013"].to_i
    #.7388 comes from the CPI calculator and, as of Jan-2014, is the most current ratio of turning 2013 dollars into 2000 dollars
    @income_2000 = (@income_2013 * (0.7388))

    #sets keys for original submission
    @keys = []
    @all = "allallallall"
    @gender = params["gender"] + "allallall"
    @age = "allallage" + params["age"]
    @education = "allalleducation" + params["education"]
    @gender_age = params["gender"] + "allage" + params["age"]
    @gender_education = params["gender"] + "alleducation" + params["education"]
    @keys << @all << @gender << @age << @education << @gender_age << @gender_education


    #sets keys for updated submission with other variables only available after inital submit
    if params["submit_type"] == "UPDATE"
      @race_descriptor = params["race"].capitalize
      @city_descriptor = params["city_type"].capitalize
      @geo_descriptor = params["geo_zone"].capitalize
      @city = "allallgeography" + params["city_type"]
      @geo = "allallgeography" + params["geo_zone"]
      @race = "all" + params["race"] + "allall"
      @gender_race = params["gender"] + params["race"] + "allall"
      @gender_race_education = params["gender"] + params["race"] + "education" + params["education"]
      @gender_race_age = params["gender"] + params["race"] + "age" + params["age"]
      @race_education = "all" + params["race"] + "education" + params["education"]
      @race_age = "all" + params["race"] + "age" + params["age"]
      

      if @race_descriptor != ""
        @keys << @race << @gender_race << @gender_race_education << @gender_race_age << @race_education << @race_age
      else
      end
      
      if @city_descriptor != ""
        @keys << @city
      else
      end

      if @geo_descriptor != ""
        @keys << @geo
      else
      end
    else 
    end


    @output_2013 = {}
    @output_2000 = {}
    @data_2013 = Percentile.new(DATA_2013)
    @data_2000 = Percentile.new(DATA_2000)
    #Produces percentile rankings 
    @keys.each do |key|
      percentile_2013 = @data_2013.find(key, @income_2013)
      percentile_2000 = @data_2000.find(key, @income_2000)
      @output_2013[key] = percentile_2013
      @output_2000[key] = percentile_2000
    end

          binding.pry

    
    Entry.create(submit_type: params["submit_type"], gender: params["gender"], education: params["education"], age: params["age"], salary_2013: params["salary_2013"], salary_guess_2013: params["salary_guess_2013"], geo_zone: params["geo_zone"], city_type: params["city_type"], race: params["race"])
    
    respond_to do |format|
        format.js
    end

  end
end