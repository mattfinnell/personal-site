import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import SiteNavBar from './SiteNavBar';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Passions from "../pages/Passions";
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
          <Route path="/passions" component={Passions}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </section>
      </div>
    );
  }
}