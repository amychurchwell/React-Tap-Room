import React from 'react';
import PropTypes from "prop-types";

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {
      currentlyVisibleContent = <h1>Else</h1>
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
