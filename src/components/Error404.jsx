import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <style jsx>{`
        body{
          text-align: center;
        }
        a {
          color: #000;
          font-weight: bold;
        }
      `}</style>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <p>Would you like to return <Link to="/">home</Link> instead?</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
