import React from 'react';
import { Route } from 'react-router-dom';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
    );
  }
}

export default App;
