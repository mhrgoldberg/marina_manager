class Api::V1::SpotsController < ApplicationController

  # /api/v1/spots  -  GET
  def index
    @spots = Spot.all
    @boats = Boat.all
    # send both spots and boats to frontend
    # ideally would have used jbuilder to shape data from API
    render json: {
      spots: Spot.convert_data_to_object(@spots), 
      boats: Boat.convert_data_to_object(@boats)
    }
  end
	

  private
  def spot_params
    params.require(:spot).permit(
      :boat_id, :spot_number
    )
  end
end
