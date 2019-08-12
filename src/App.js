//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  return (
    <div className="container">
      <TopRow />
      <Buttons />
    </div>
  );
}

export default App;
