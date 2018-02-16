import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  return (
    <div>
      <h1 className="subtitle">NewKegForm Works</h1>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
