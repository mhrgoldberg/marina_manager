class Api::V1::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render json: @spots
  end

  def show
    @spot = Spot.find(params[:id])
		render json: @spot
	end

	def update
    @spot = Spot.find(params[:id])
    if @spot.update(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end
	

  private
  def spot_params
    params.require(:spot).permit(
      :boat_id, :spot_number
    )
  end
end
