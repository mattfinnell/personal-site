import React from 'react';
import { Row, Col } from 'react-bootstrap';
 
export default class Landing extends React.Component {
  render() {
    return (
      <section id="landing" className="text-center verticaly-center-child" >
        <Row><Col md={12}><h1>Matt Finnell</h1></Col></Row>
        <Row><Col md={12}><p>Seattle Based Software Engineer</p></Col></Row>
        <Row>
          <Col md={12}>
            <h4>
              <a href="https://github.com/mattfinnell"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin"></i></a>
            </h4>
          </Col>
        </Row>
      </section>
    )
  }
}
