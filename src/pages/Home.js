import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

export default class Home extends Component {
  render() {
    return (
      <Container className="align-middle">
        <Row><h1>Matt Finnell</h1></Row>
        <Row><p>Seattle based Software Engineer</p></Row>
        <Row>
          <Col md={3}><LinkContainer to="/projects"><Button>Projects</Button></LinkContainer></Col>
          <Col md={3}><LinkContainer to="/passions"><Button>Passions</Button></LinkContainer></Col>
          <Col md={3}><LinkContainer to="/about"><Button>About</Button></LinkContainer></Col>
          <Col md={3}><LinkContainer to="/contact"><Button>Contact</Button></LinkContainer></Col>
        </Row>
        <Row><FontAwesomeIcon icon="igloo" /></Row>
      </Container>
    )
  }
}
