import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  console.log(props.kegList);
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
        {props.kegList.map((keg) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            image = {keg.image}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}/>
        )}
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default KegList;
