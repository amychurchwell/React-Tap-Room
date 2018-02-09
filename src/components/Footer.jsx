import React from 'react';

const footer = {
  color: '#2b495f',
  fontWeight: 'bold'
};

function Footer() {
  return (
    <div style={footer}>
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
        }
    `}</style>
  <p className="footer">&copy; React Tap Room, 2018.</p>
    </div>
  );
}

export default Footer;
