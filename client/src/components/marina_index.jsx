import React, { useState, useEffect } from "react";
import axios from "axios";
import Spot from "./spot";

export default function MarinaIndex() {
  const [spots, setSpots] = useState([]);
  const fetchSpots = async () => {
    const result = await axios("/api/v1/spots");
    // map boats to spots
    const spotsWithBoats = Object.values(result.data.spots).map((spot) => {
      if (spot.boat_id) {
        spot["boat"] = result.data.boats[spot.boat_id];
      }
      return spot;
    });
    setSpots(spotsWithBoats);
  };
  useEffect(() => {
    // fetch Spots on load
    fetchSpots();
  }, []);

  return (
    <div className="marina-index">
      {spots.map((spot) => {
        return (
          <Spot
            spot={spot}
            spots={spots}
            fetchSpots={fetchSpots}
            key={spot.id}
          />
        );
      })}
    </div>
  );
}
