class EntriesController < ApplicationController
  def create
    @entry = Entry.new
  end

end