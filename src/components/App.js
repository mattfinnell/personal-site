import React from 'react';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Contact/>
      </div>
    );
  }
}