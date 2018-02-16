import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Error404 from './Error404';
import Body from './Body';
import Footer from './Footer';

import KegList from './KegList/KegList';
import EditKeg from './KegList/EditKeg';
import SellPint from './Keglist/SellPint';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
  }

  render(){
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
          <Route exact path="/sellpint" component={SellPint} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
