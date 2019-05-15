import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Component } from 'react';
export default class ProfessionalNetworkingButtons extends Component {
  render() {
    return (<Container id="professional-networking-buttons">
      <Row className="resume-buttons text-center">
        <Col sm={4}><Button href="">Resume</Button></Col>
        <Col sm={4}><Button href="https://github.com/mattfinnell"><i className="fab fa-github" />Github</Button></Col>
        <Col sm={4}><Button href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin" />LinkedIn</Button></Col>
      </Row>
    </Container>);
  }
}
