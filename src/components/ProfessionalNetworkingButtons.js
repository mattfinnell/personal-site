import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Component } from 'react';

export default class ProfessionalNetworkingButtons extends Component {
  render() {
    return (
      <section id="professional-networking-buttons" className="site-section">
        <Row className="resume-buttons text-center">
          <Col sm={4}><Button href="">Resume</Button></Col>
          <Col sm={4}><Button href="https://github.com/mattfinnell"><i className="fab fa-github" />Github</Button></Col>
          <Col sm={4}><Button href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin" />LinkedIn</Button></Col>
        </Row>
      </section>
    );
  }
}
