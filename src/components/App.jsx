import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Body from './Body';
import KegList from './KegList/KegList';
import EditKeg from './KegList/EditKeg';
import Footer from './Footer';

function App() {
  return (
    <div>
      <style jsx global>{`
        body{
          font-family: Helvetica;
        }
        .subtitle {
          margin-left: 80px;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/keglist" component={KegList} />
        <Route exact path="/editkeg" component={EditKeg} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
