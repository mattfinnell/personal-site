import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Row><h1>About</h1></Row>
        <Row><p>I'm Matt Finnell, and I am a Software Engineer based out of Seattle Washington. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Row>
        <Row><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Row>
        { this.state.jobs.map(job => <Experience job={job}/>) }
        <Row>
          <Col sm={4}><Button href="">Resume</Button></Col>
          <Col sm={4}><Button href="https://github.com/mattfinnell"><i className="fab fa-github"/>Github</Button></Col>
          <Col sm={4}><Button href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin"/>LinkedIn</Button></Col>
        </Row>
      </Container>
    )
  }
}
