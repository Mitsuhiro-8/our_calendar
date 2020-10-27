class CalendarsController < ApplicationController

  def index
    @calendars = Calendar.all
    render json: @calendars
  end
end
