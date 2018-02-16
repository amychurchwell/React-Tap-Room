import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegDisplay =
  <div>
    <style jsx>{`
      .keg {
        border: 1px solid black;
        margin: 15px;
        text-align: center;
        width: 400px;
        height: 400px;
      }
      .kegimg {
        overflow: hidden;
        height: 60%;
      }
      .kegimg img{
        width: 100%;
      }
      .keg a {
        text-decoration: none;
        font-weight: bold;
        color: #000;
        border: 1px solid black;
        padding: 5px 30px 5px 30px;
        margin: 5px;
      }
      ul {
        text-align: left;
      }
  `}</style>
    <div className="kegcontainer">
      <div className="keg">
        <div className="kegimg">
          <img src={props.image}/>
        </div>
        <h3>{props.name}, {props.brand}</h3>
        <ul>
          <li>${props.price} per pint!</li>
          <li>{props.alcoholContent}% <em>Alcohol Content</em></li>
        </ul>
      </div>
    </div>
  </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div>
        <p>Employee keg option</p>
        {kegDisplay}
      </div>
    );
  }else{
    return (
      <div>
        {kegDisplay}
      </div>
    )
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  image: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default Keg;
