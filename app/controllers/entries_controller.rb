class EntriesController < ApplicationController
  def index
  end

  def submit
    income = params["salary"].to_i
    keys = []
    output = {}
    all = "allallallall"
    gender = params["gender"] + "allallall"
    age = "allallage" + params["age"]
    geo = "allallgeography" + params["geo_zone"]
    city = "allallgeography" + params["city_type"]
    education = "allalleducation" + params["education"]
    race = "all" + params["race"] + "allall"
    gender_education = params["gender"] + "alleducation" + params["education"]
    gender_age = params["gender"] + "allage" + params["age"]
    gender_race = params["gender"] + params["race"] + "allall"
    gender_race_education = params["gender"] + params["race"] + "education" + params["education"]
    gender_race_age = params["gender"] + params["race"] + "age" + params["age"]
    race_education = "all" + params["race"] + "education" + params["education"]
    race_age = "all" + params["race"] + "age" + params["age"]
    keys << all << gender << age << geo << city << education << gender_education << gender_age << gender_race_education << gender_race_age << race_education << race_age << race << gender_race
    binding.pry
    keys.each do |key|
      p = 0
      l = DATA_2013[key].length
      if income > percentiles[(length-1)]
        p = 99
      elsif income <= percentiles[0]
        p = 1
      else
        while income > percentiles[i]
          p += 1
        end
      end
      output[key] = p
    end
    Entry.create(geo_zone: params["geo_zone"], city_type: params["city_type"], race: params["race"], gender: params["gender"], education: params["education"], salary: params["salary"], assets: params["assets"], inherited_assets: params["inherited_assets"], salary_guess: params["salary_guess"], wealth_guess: params["wealth_guess"], self_happiness_descr: params["self_happiness_descr"], self_wealth_descr: params["self_wealth_descr"], age: params["age"])
    render nothing: true
  end

end