import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Bio extends React.Component {

  render() {
    return (
      <section id="bio" className="site-section">
        <Row><Col md={12} className="text-center"><h2>About</h2></Col></Row>
        <Row><Col md={12}><p>My Name is Matt Finnell and I am a Software Engineer who grew up out of the Seattle area. Usually when I'm not working on projects I'll be focusing on Snowboarding, Music or any random hobby that I have picked up for the moment (cooking has been a big one as of recently). I've lived in the PNW since 1999 so the cabin fever is starting to become overwhelming.</p></Col></Row>
        <Row><Col md={12}><p> For work and projects I primarily use C#, Python and JavaScript as my main languages and strongly prefer *Nix systems. I'm always tinkering around with different tools and frameworks, this site is an exception to such because the simplicity of it means that I can actually get it out to the world. There are a handful of projects that I've been meaning to revisit, fingers crossed that they actually make it out into the wild.</p></Col></Row>
      </section>
    )
  }
}