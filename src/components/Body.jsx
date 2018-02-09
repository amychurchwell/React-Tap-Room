import React from 'react';

function Body() {
  return (
    <div>
      <style jsx>{`
        body{
          text-align: center;
        }
        .employee {
          padding: 15px;
          border: 1px solid black;
          width: 500px;
        }
        .container {
          display: flex;
          align-items: center;
        }
    `}</style>
      <div>
        <h1>Welcome to the React Tap Room!</h1>
        <div className="container">
          <div className="employee">
            <h3>Employee Portal</h3>
            <p>Username:</p>
            <p>Password:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
