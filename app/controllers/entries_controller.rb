class EntriesController < ApplicationController
  def index
    binding.pry
    Entry.create(zip_code: params['zip_code'], race: params["race"], gender: params["gender"], education: education, salary: params["salary"], assets: params["assets"], inherited_assets: params["inherited_assets"], salary_guess: params["salary_guess"], wealth_guess: params["wealth_guess"])
  end

end