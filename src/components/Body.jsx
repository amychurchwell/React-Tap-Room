import React from 'react';
import hero from '../assets/hero1.jpeg';

const heroImage = {
  backgroundImage: `url(${hero})`
};

const heroTitle = {
  textAlign: 'center',
  color: '#2b495f'
}

function Body() {
  return (
    <div>
      <style jsx>{`
        .hero {
          height: 80vh;
          color: #fff;
          background-size: cover;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .employee {
          padding: 15px;
          border: 1px solid #fff;
          background-color: #030d1e61;
          width: 500px;
          margin: 20px;
          height: 180px;
          text-align: center;
        }
        .employee button{
          border-radius: 4px;
        }
        .greeting {
          background-color: #fff;
          color: #000;
          height: 100px;
          padding: 15px;
          width: 500px;
          text-align: center;
        }
    `}</style>
      <div>
        <div className="hero" style={heroImage}>
          <div className="greeting">
            <h1>Welcome!</h1>
          </div>
          <div className="employee">
            <h3>Employee Portal</h3>
            <p>Username: <input type="text"></input></p>
            <p>Password: <input type="text"></input></p>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
