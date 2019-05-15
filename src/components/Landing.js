import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
 
export default class Landing extends React.Component {
  render() {
    return (
      <Container className="text-center" id="home">
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
      </Container>
    )
  }
}
