import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Error404 from './Error404';
import Body from './Body';
import Footer from './Footer';

import KegList from './KegList/KegList';
import EditKeg from './KegList/EditKeg';
import SellPint from './Keglist/SellPint';
import NewKegControl from './NewKeg/NewKegControl';
// import NewKegForm from './NewKeg/NewKegForm';

import beer1 from '../assets/beer-photo1.jpeg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Butter Beer',
          brand: 'HufflePuff Brewery',
          price: '20',
          alcoholContent: '200',
          image: beer1
        },
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
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
          <Route exact path="/keglist" render={()=><KegList kegList={this.state.masterKegList}/>} />
          <Route exact path="/editkeg" component={EditKeg} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route exact path="/sellpint" component={SellPint} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
