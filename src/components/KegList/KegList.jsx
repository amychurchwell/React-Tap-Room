import React from 'react';
import Keg from "./Keg";
import { Link } from 'react-router-dom';

function KegList() {
  return (
    <div>
      <style jsx>{`
        .kegcontainer {
          display: flex;
        }
    `}</style>
      <h1>KegList Works</h1>
      <div className="kegcontainer">
        <Keg
          name="Butter Beer"
          brand="HufflePuff Brewery"
          price="20"
          alcoholContent="200"/>
          <Keg
            name="Fireball"
            brand="Spicy Liquor LLC"
            price="10"
            alcoholContent="100"/>
            <Keg
              name="Motor Oil"
              brand="Robot Party Factory"
              price="5"
              alcoholContent="0"/>
      </div>
    </div>
  );
}

export default KegList;
