import React, { useState } from "react";
import axios from "axios";

export default function BoatForm({ spotId, spots, fetchSpots }) {
  const [name, setName] = useState("");
  const [length, setLength] = useState(0);
  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a boat with a realtionship to the current spot
    await axios.post("/api/v1/boats/", {
      name,
      length,
      color,
      spot_id: spotId,
    });
    // refetch spots to update DOM (ideally this would be handled by React Context or Redux without another API call)
    fetchSpots();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Length
        <input
          type="number"
          name="length"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </label>
      <label>
        Color
        <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <button>Add Boat</button>
    </form>
  );
}
