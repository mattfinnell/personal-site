import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
    );
  }
}

export default App;
