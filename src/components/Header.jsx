import React from 'react';
import { Link } from 'react-router-dom';
import title from '../assets/title.gif';

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
          text-decoration: underline;
        }
        .logo {
          width: 400px;
          margin: 15px;
        }
    `}</style>
      <div className="container">
        <img src={title} className="logo"></img>
        <div className="nav">
          <Link to="/">home</Link> | <Link to="/keglist">keg list</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
