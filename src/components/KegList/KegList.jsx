import React from 'react';
import Keg from "./Keg";
import { Link } from 'react-router-dom';
import beer1 from '../../assets/beer-photo1.jpeg';
import beer2 from '../../assets/beer-photo2.jpeg';
import beer3 from '../../assets/beer-photo3.jpeg';
import beer4 from '../../assets/beer-photo4.jpeg';
import beer5 from '../../assets/beer-photo5.jpeg';
import beer6 from '../../assets/beer-photo6.jpeg';

var masterKegList = [
  {
    name: 'Butter Beer',
    brand: 'HufflePuff Brewery',
    price: '20',
    alcoholContent: '200',
    image: beer1
  },
  {
    name: 'Fireball',
    brand: 'Spicy Liquor LLC',
    price: '10',
    alcoholContent: '100',
    image: beer2
  },
  {
    name: 'Motor Oil',
    brand: 'Robot Party Factory',
    price: '5',
    alcoholContent: '0',
    image: beer3
  },
  {
    name: 'Beer Beer Beer',
    brand: 'Beer Co',
    price: '12',
    alcoholContent: '70',
    image: beer4
  },
  {
    name: 'Stout Porter Ipa',
    brand: 'Portland Beerary',
    price: '8',
    alcoholContent: '50',
    image: beer5
  },
  {
    name: 'Black Label',
    brand: 'PDX Beer',
    price: '10',
    alcoholContent: '80',
    image: beer6
  }
]

function KegList() {
  return (
    <div>
      <style jsx>{`
        .kegcontainer{
          display: flex;
          flex-wrap: wrap;
        }
    `}</style>
      <h1>Our kegs</h1>
      <div className="kegcontainer">
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            image = {keg.image}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default KegList;
