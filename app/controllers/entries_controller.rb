class EntriesController < ApplicationController
  def index
  end

  def submit
    Entry.create(zip_code: params["zip_code"], race: params["race"], gender: params["gender"], education: params["education"], salary: params["salary"], assets: params["assets"], inherited_assets: params["inherited_assets"], salary_guess: params["salary_guess"], wealth_guess: params["wealth_guess"], self_happiness_descr: params["self_happiness_descr"], self_wealth_descr: params["self_wealth_descr"], age: params["age"])
    #issue with redirect set default to no
    render nothing: true
  end

end