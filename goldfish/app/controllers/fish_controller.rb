class FishController < ApplicationController
  def index
    render json: Fish.all
  end

  def create
    @fish = Fish.new(fish_params)
    @fish.save
  end

  private
  def fish_params
    params.require(:fish).permit(:name, :variety)
  end

  end
