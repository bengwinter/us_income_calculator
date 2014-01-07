class EntriesController < ApplicationController
  def index
  end

  def submit
    @descriptors = []
    @race_descriptor = params["race"].capitalize
    @gender_descriptor = params["gender"].capitalize
    @city_descriptor = params["city_type"].capitalize
    @geo_descriptor = params["geo_zone"].capitalize

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
    @income_2000 = params["salary_2000"].to_i
    @income_guess_2000 = params["salary_guess_2000"].to_i

    @keys = []
    @output = {}
    @all = "allallallall"
    @gender = params["gender"] + "allallall"
    @age = "allallage" + params["age"]
    @geo = "allallgeography" + params["geo_zone"]
    @city = "allallgeography" + params["city_type"]
    @education = "allalleducation" + params["education"]
    @race = "all" + params["race"] + "allall"
    @gender_education = params["gender"] + "alleducation" + params["education"]
    @gender_age = params["gender"] + "allage" + params["age"]
    @gender_race = params["gender"] + params["race"] + "allall"
    @gender_race_education = params["gender"] + params["race"] + "education" + params["education"]
    @gender_race_age = params["gender"] + params["race"] + "age" + params["age"]
    @race_education = "all" + params["race"] + "education" + params["education"]
    @race_age = "all" + params["race"] + "age" + params["age"]
    @keys << @all << @gender << @age << @geo << @city << @education << @gender_education << @gender_age << @gender_race_education << @gender_race_age << @race_education << @race_age << @race << @gender_race
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
      @output[key] = p
    end
    
    Entry.create(geo_zone: params["geo_zone"], city_type: params["city_type"], race: params["race"], gender: params["gender"], education: params["education"], age: params["age"], salary_2013: params["salary_2013"], salary_guess_2013: params["salary_guess_2013"], income_happiness_2013: params["income_happiness_2013"], overall_happiness_2013: params["overall_happiness_2013"], salary_2000: params["salary_2000"], salary_guess_2000: params["salary_guess_2000"], income_happiness_2000: params["income_happiness_2000"], overall_happiness_2000: params["overall_happiness_2000"])
    respond_to do |format|
        format.js
    end
  end
end