class Api::V1::BoatsController < ApplicationController

  # /api/v1/boats  -  POST
  def create
    @boat = Boat.new(boat_params)
    if @boat.save
      spot = Spot.find(boat_params[:spot_id])
      spot.boat_id = @boat.id
      spot.save
      render json: @boat, status: :created
    else
      render json: @boat.errors, status: 422
    end
  end

  # /api/v1/boats/:id  -  PATCH
  def update
    # moves boat from one spot to another
    @boat = Boat.find(params[:id])
    currentSpot = Spot.find(@boat.spot_id)
    newSpot = Spot.find(boat_params[:spot_id])

    if @boat.update(boat_params)
      # swaps the current Spots and newSpots boat_id to move boat position
      currentSpot.boat_id = nil
      newSpot.boat_id = @boat.id
      currentSpot.save
      newSpot.save
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  # /api/v1/boats/:id  -  DELETE
  def destroy
		boat = Boat.find(params[:id])
    spot = Spot.find(boat.spot_id)
    spot.boat_id = nil
    spot.save
    boat.destroy

    render :index
  end
	

  private
  def boat_params
    params.require(:boat).permit(
      :spot_id, :name, :color, :length
    )
  end
end
