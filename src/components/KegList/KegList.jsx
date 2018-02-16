import React from 'react';
import Keg from "./Keg";
import { Link } from 'react-router-dom';
import beer1 from '../../assets/beer-photo1.jpeg';
import beer2 from '../../assets/beer-photo2.jpeg';
import beer3 from '../../assets/beer-photo3.jpeg';
import beer4 from '../../assets/beer-photo4.jpeg';
import beer5 from '../../assets/beer-photo5.jpeg';
import beer6 from '../../assets/beer-photo6.jpeg';
import beer7 from '../../assets/beer-photo7.jpeg';
import beer8 from '../../assets/beer-photo8.jpeg';
import beer9 from '../../assets/beer-photo9.jpeg';
import beer10 from '../../assets/beer-photo10.jpeg';

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
  },
  {
    name: 'Code School Drove Me To Drink',
    brand: 'Epicodus',
    price: '4',
    alcoholContent: '98',
    image: beer7
  },
  {
    name: 'Fizzy Brew',
    brand: 'Beering Deer',
    price: '19',
    alcoholContent: '42',
    image: beer8
  },
  {
    name: 'Beer On A Shelf',
    brand: 'PDX beer bros',
    price: '1',
    alcoholContent: '80',
    image: beer9
  },
  {
    name: 'Shh This Is Wine',
    brand: 'Not A Beer Co.',
    price: '10',
    alcoholContent: '10',
    image: beer10
  }
];

function KegList() {
  return (
    <div>
      <style jsx>{`
        .kegcontainer{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
    `}</style>
      <h1 className="subtitle">Our kegs</h1>
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
