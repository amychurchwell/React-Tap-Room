import React from 'react';
import hero from '../assets/hero1.jpeg';

const heroImage = {
  backgroundImage: `url(${hero})`
}

function Body() {
  return (
    <div>
      <style jsx>{`
        .hero {
          height: 800px;
          color: #fff;
          background-size: cover;
          display: flex;
        }
        .employee {
          padding: 15px;
          border: 1px solid #fff;
          width: 500px;
          margin: 20px;
          height: 200px;
        }
    `}</style>
      <div>
        <h1>Welcome to the React Tap Room!</h1>
        <h3>Continue as patron.</h3>
        <div className="hero" style={heroImage}>
          <div className="employee">
            <h3>Employee Portal</h3>
            <p>Username: __________</p>
            <p>Password: __________</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
