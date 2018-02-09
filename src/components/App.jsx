import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Body from './Body';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
