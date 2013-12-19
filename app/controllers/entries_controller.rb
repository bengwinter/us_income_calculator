class EntriesController < ApplicationController
  def index
  end

  def submit
    Entry.create(geo_zone: params["geo_zone"], city_type: params["city_type"], race: params["race"], gender: params["gender"], education: params["education"], salary: params["salary"], assets: params["assets"], inherited_assets: params["inherited_assets"], salary_guess: params["salary_guess"], wealth_guess: params["wealth_guess"], self_happiness_descr: params["self_happiness_descr"], self_wealth_descr: params["self_wealth_descr"], age: params["age"])
    render nothing: true
  end

end