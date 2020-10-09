import React from "react";
import BoatForm from "./boat_form";
import BoatUpdate from "./boat_update";

export default function Spot({ spot, spots, fetchSpots }) {
  let form = <BoatForm spotId={spot.id} fetchSpots={fetchSpots} />;

  if (spot.boat_id) {
    form = <BoatUpdate spot={spot} spots={spots} fetchSpots={fetchSpots} />;
  }

  return (
    <div>
      Spot {spot.spot_number}
      {form}
    </div>
  );
}
