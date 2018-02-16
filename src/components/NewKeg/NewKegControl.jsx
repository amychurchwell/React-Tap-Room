import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
  }

  render(){
    return (
      <div>
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
