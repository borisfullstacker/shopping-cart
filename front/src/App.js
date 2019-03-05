import React, { Component } from 'react';
import MainCont from './components/MainCont'
import Panel from './components/Panel'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/panel' component={Panel}/>
          <Route path='/' component={MainCont}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
