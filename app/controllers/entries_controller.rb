class EntriesController < ApplicationController
  def index
    @entry = Entry.new
  end

end