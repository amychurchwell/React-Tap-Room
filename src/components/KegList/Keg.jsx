import React from 'react';
import PropTypes from "prop-types";

// name, brand, price, and alcoholContent.

function Keg(props) {
  return (
    <div>
      <h3>{props.name} - {props.brand}</h3>
      <p>${props.price} per pint!</p>
      <p><em>{props.alcoholContent}%</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};

export default Keg;
