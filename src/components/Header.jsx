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
        .nav a:hover {
          background-color: #000;
          color: #fff;
        }
        .title {
          padding: 5px;
          padding-right: 10px;
          padding-left: 10px;
          border: 1px solid black;
          background-color: #fff;
          width: 200px;
          font-size: 50px;
        }
    `}</style>
      <div className="container">
        <h1 className="title">React Tap Room</h1>
        <div className="nav">
          <Link to="/">Home</Link> <Link to="/keglist">Keg List</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
