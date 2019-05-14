import React from 'react';
import { Route } from 'react-router-dom';
import SiteNavBar from './SiteNavBar';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SiteNavBar/>
        <section className="page">
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </section>
      </div>
    );
  }
}