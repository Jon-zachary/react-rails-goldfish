class FishController < ApplicationController
  def index
    render json: Fish.all
  end
end
