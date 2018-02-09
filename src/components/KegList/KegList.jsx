import React from 'react';
import Keg from "./Keg";
import { Link } from 'react-router-dom';

var masterKegList = [
  {
    name: 'Butter Beer',
    brand: 'HufflePuff Brewery',
    price: '20',
    alcoholContent: '200'
  },
  {
    name: 'Fireball',
    brand: 'Spicy Liquor LLC',
    price: '10',
    alcoholContent: '100'
  },
  {
    name: 'Motor Oil',
    brand: 'Robot Party Factory',
    price: '5',
    alcoholContent: '0'
  }
]

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
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default KegList;
