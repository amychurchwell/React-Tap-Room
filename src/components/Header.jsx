import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 60px;
          padding-right: 60px;
        }
        .nav a{
          font-size: 20px;
          text-decoration: none;
          color: #000;
        }
    `}</style>
      <div className="container">
        <h1>React Tap Room</h1>
        <div className="nav">
          <Link to="/">Home</Link> | <Link to="/keglist">Keg List</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
