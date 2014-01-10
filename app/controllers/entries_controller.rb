class EntriesController < ApplicationController
  def index
  end

  def submit
    @descriptors = []
    @gender_descriptor = params["gender"].capitalize

    case params["education"]
    when params["education"] = "no-highschool"
      @education_descriptor = "No High School Diploma"
    when params["education"] = "highschool"
      @education_descriptor = "High School Diploma"
    when params["education"] = "associate"
      @education_descriptor = "Associate Degree"
    when params["education"] = "bachelors"
      @education_descriptor = "Bachelor's Degree"
    when params["education"] = "advanced"
      @education_descriptor = "Advanced Degree"
    end

    case params["age"]
    when params["age"] = "agerange1"
      @age_descriptor = "15 to 24"
    when params["age"] = "agerange2"
      @age_descriptor = "25 to 29"
    when params["age"] = "agerange3"
      @age_descriptor = "30 to 34"
    when params["age"] = "agerange4"
      @age_descriptor = "35 to 39"
    when params["age"] = "agerange5"
      @age_descriptor = "40 to 44"
    when params["age"] = "agerange6"
      @age_descriptor = "45 to 49"
    when params["age"] = "agerange7"
      @age_descriptor = "50 to 54"
    when params["age"] = "agerange8"
      @age_descriptor = "55 to 59"
    when params["age"] = "agerange9"
      @age_descriptor = "60 to 64"
    when params["age"] = "agerange10"
      @age_descriptor = "65 to 69"
    when params["age"] = "agerange11"
      @age_descriptor = "70 to 74"
    when params["age"] = "agerange12"
      @age_descriptor = "75 and over"
    end
    
    @income_2013 = params["salary_2013"].to_i
    @income_guess_2013 = params["salary_guess_2013"].to_i
    #.7388 comes from the CPI calculator and, as of Jan-2014, is the most current ratio of turning 2013 dollars into 2000 dollars
    @income_2000 = (@income_2013 * (0.7388))

    #sets keys for original submission
    @keys = []
    @output_2013 = {}
    @output_2000 = {}
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

    #Produces percentile rankings for 2013 income
    @keys.each do |key|
      p = 0
      percentiles = DATA_2013[key]
      l = percentiles.length
      if @income_2013 > percentiles[(l-1)]
        p = 99
      elsif @income_2013 <= percentiles[0]
        p = 1
      else
        while @income_2013 > percentiles[p]
          p += 1
        end
      end
      if p >= 100
        p = 99
      end
      @output_2013[key] = p
    end

    #Produces percentile rankings for 2000 income
    @keys.each do |key|
      p = 0
      percentiles = DATA_2000[key]
      l = percentiles.length
      if @income_2000 > percentiles[(l-1)]
        p = 99
      elsif @income_2000 <= percentiles[0]
        p = 1
      else
        while @income_2000 > percentiles[p]
          p += 1
        end
      end
      if p >= 100
        p = 99
      end
      @output_2000[key] = p
    end

    @output_ideal = {}
    @output_gs = {}

    
    Entry.create(submit_type: params["submit_type"], gender: params["gender"], education: params["education"], age: params["age"], salary_2013: params["salary_2013"], salary_guess_2013: params["salary_guess_2013"], geo_zone: params["geo_zone"], city_type: params["city_type"], race: params["race"])
    
    respond_to do |format|
        format.js
    end
  end
end