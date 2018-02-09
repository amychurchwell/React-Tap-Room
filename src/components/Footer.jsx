import React from 'react';

const footer = {
  color: 'gray',
  fontWeight: 'bold'
};

function Footer() {
  return (
    <div style={footer}>
      <p className="footer">&copy; React Tap Room, 2018.</p>
    </div>
  );
}

export default Footer;
