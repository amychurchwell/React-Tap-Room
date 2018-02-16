import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList/KegList';

import RaisedButton from 'material-ui/RaisedButton';

function Admin(props){
  return (
    <div>
      <h2 className="subtitle">Employee Portal</h2>
      <RaisedButton className="subtitle" href="#/newkeg" label="Add keg" primary={true} />
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
