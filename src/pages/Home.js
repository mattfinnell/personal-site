import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
export default class Home extends Component {
  render() {
    return (
      <Container className="align-middle">
        <Row><h1>Matt Finnell</h1></Row>
        <Row><p>Seattle Based Software Engineer</p></Row>
        <Row>
          <Col md={4}><LinkContainer to="/projects"><Button>Projects</Button></LinkContainer></Col>
          <Col md={4}><LinkContainer to="/about"><Button>About</Button></LinkContainer></Col>
          <Col md={4}><LinkContainer to="/contact"><Button>Contact</Button></LinkContainer></Col>
        </Row>
        <Row>
          <a href="https://github.com/mattfinnell"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin"></i></a>
        </Row>
      </Container>
    )
  }
}
