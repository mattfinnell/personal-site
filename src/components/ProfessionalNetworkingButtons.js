import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Component } from 'react';

export default class ProfessionalNetworkingButtons extends Component {
  render() {
    return (
      <section id="professional-networking-buttons" className="site-section verticaly-center-child">
        <Row className="resume-buttons text-center my-auto">
          <Col md={4}><Button href="">Resume</Button></Col>
          <Col md={4}><Button href="https://github.com/mattfinnell"><i className="fab fa-github" />Github</Button></Col>
          <Col md={4}><Button href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin" />LinkedIn</Button></Col>
        </Row>
      </section>
    );
  }
}
