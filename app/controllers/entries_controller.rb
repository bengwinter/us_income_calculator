class EntriesController < ApplicationController
  def index
  end

  def submit
    binding.pry
    Entry.create(zip_code: params["zip_code"], race: params["race"], gender: params["gender"], education: params["education"], salary: params["salary"], asset_value: params["assets"], inherited_assets: params["inherited_assets"], guess_income_rank: params["salary_guess"], guess_wealth_rank: params["wealth_guess"], self_happiness_descr: params["self_happiness_descr"], self_wealth_descr: params["self_wealth_descr"])
    respond_to do |format|
      format.js
    end
  end

end

 "zip_code"
 "race"
 "gender"
 "education"
 "salary"
 "assets"
 "inherited_assets"
 "salary_guess"
 "wealth_guess"
 "self_happiness_descr"
 "self_wealth_descr"