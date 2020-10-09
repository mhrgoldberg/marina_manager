import React, { useState } from "react";
import axios from "axios";

export default function BoatUdate({ spot, spots, fetchSpots }) {
  const [moveSpot, setmoveSpot] = useState(0);

  const deleteBoat = async () => {
    await axios.delete(`api/v1/boats/${spot.boat_id}`);
    // refetch spots to update DOM (ideally this would be handled by React Context or Redux without another API call)
    fetchSpots();
  };

  const moveBoat = async (e) => {
    e.preventDefault();
    const newSpot = spots[moveSpot - 1];
    if (!newSpot.boat_id) {
      // there is no boat in the new spot so go ahead with the move
      await axios.patch(`api/v1/boats/${spot.boat_id}`, {
        spot_id: newSpot.id,
      });
      // refetch spots to update DOM
      fetchSpots();
    } else {
      // there is already a boat in the new spot
      alert("There is already a boat in that spot, try another one!");
    }
  };

  return (
    <div className="boat-update">
      <div>
        Name: {spot.boat.name} Length: {spot.boat.length} Color:{" "}
        {spot.boat.color}
      </div>
      <button onClick={deleteBoat}>Remove</button>
      <form onSubmit={moveBoat}>
        <input
          type="number"
          name="spot"
          value={moveSpot}
          min="1"
          max="20"
          onChange={(e) => setmoveSpot(e.target.value)}
        />
        <button>Move Boat to New Spot</button>
      </form>
    </div>
  );
}
