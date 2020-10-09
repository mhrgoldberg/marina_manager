import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const fetchTestDatas = function () {
    debugger
    fetch("/api/v1/spots")
      .then((res) => res.json())
      .then((response) => {
        console.log("Test datas response", response);
      })
      .catch((error) => {
        console.log("Error while fetching test datas", error);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchTestDatas}>Fetch Test Datas</button>
    </div>
  );
}

export default App;
