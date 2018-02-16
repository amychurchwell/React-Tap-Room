import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 5,
};

function Keg(props) {
  const kegDisplay =
    <div>
      <style jsx>{`
        .keg {
          border: 1px solid #000;
          text-align: center;
          width: 400px;
          height: 400px;
          background-color: #fff;
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
        .keg-header {
          background-color: black;
          border: 1px solid black;
          text-align: center;
          margin-right: 30px;
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
      <div className="keg-header">
        <RaisedButton href="#/editkeg" style={style} label="Edit" />
        <RaisedButton href="#/sellpint" style={style} label="Sell Pint" />
        <RaisedButton href="#/" style={style} label="Delete (X)" />
        {kegDisplay}
      </div>
    );
  }else{
    return (
      <div>
        {kegDisplay}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  image: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default Keg;
