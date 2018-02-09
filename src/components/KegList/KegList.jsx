import React from 'react';
import Keg from "./Keg";

function KegList() {
  return (
    <div>
      <h1>KegList Works</h1>
      <Keg
        name="Butter Beer"
        brand="HufflePuff"
        price="20"
        alcoholContent="200"/>
    </div>
  );
}

export default KegList;
