import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// name, brand, price, and alcoholContent.

function Keg(props) {
  return (
    <div>
      <style jsx>{`
        .keg {
          border: 1px solid black;
          padding: 15px;
          margin: 15px;
          text-align: center;
        }
        a {
          text-decoration: none;
          font-weight: bold;
          color: #000;
        }
        ul {
          text-align: left;
        }
    `}</style>
      <div className="keg">
        <img src={props.image}/>
        <h3>{props.name}, {props.brand}</h3>
        <ul>
          <li>${props.price} per pint!</li>
          <li>{props.alcoholContent}% <em>Alcohol Content</em></li>
        </ul>
        <Link to="/editkeg">Edit</Link>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  image: PropTypes.string
};

export default Keg;
