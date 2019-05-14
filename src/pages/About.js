import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Jobs from '../components/Jobs';
import Education from '../components/Education';
import Accolades from '../components/Accolades';

export default class About extends React.Component {

  render() {
    return (
      <Container className="about">
        <Row><Col md={12} className="text-center"><h1>About</h1></Col></Row>
        <Row><Col md={12}><p>My Name is Matt Finnell and I am a Software Engineer who grew up out of the Seattle area. Usually when I'm not working on projects I'll be focusing on Snowboarding, Music or any random hobby that I have picked up for the moment (cooking has been a big one as of recently). I've lived in the PNW since 1999 so the cabin fever is starting to become overwhelming.</p></Col></Row>
        <Row><Col md={12}><p> For work and projects I primarily use C#, Python and JavaScript as my main languages and strongly prefer *Nix systems. I'm always tinkering around with different tools and frameworks, this site is an exception to such because the simplicity of it means that I can actually get it out to the world. There are a handful of projects that I've been meaning to revisit, fingers crossed that they actually make it out into the wild.</p></Col></Row>
        <Jobs />
        <Accolades/>
        <Education/>
        <Row className="text-center">
          <Col sm={4}><Button href="">Resume</Button></Col>
          <Col sm={4}><Button href="https://github.com/mattfinnell"><i className="fab fa-github"/>Github</Button></Col>
          <Col sm={4}><Button href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin"/>LinkedIn</Button></Col>
        </Row>
      </Container>
    )
  }
}


