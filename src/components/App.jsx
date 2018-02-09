import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Body from './Body';
import KegList from './KegList/KegList';

function App() {
  return (
    <div>
      <style jsx global>{`
        body{
          font-family: Helvetica;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/keglist" component={KegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
