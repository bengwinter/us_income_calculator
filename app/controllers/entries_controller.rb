class EntriesController < ApplicationController
  def index
    @entry = Entry.new
    @race = ['Caucasian', 'Black', 'Latino']

  end

end