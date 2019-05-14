import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Button} from 'react-bootstrap';
 
export default class Home extends React.Component {
  render() {
    return (
      <Container className="text-center">
        <Row><Col md={12}><h1>Matt Finnell</h1></Col></Row>
        <Row><Col md={12}><p>Seattle Based Software Engineer</p></Col></Row>
        <Row>
          <Col sm={{span: 2, offset: 3}}><LinkContainer to="/projects"><Button>Projects</Button></LinkContainer></Col>
          <Col sm={2}><LinkContainer to="/about"><Button>About</Button></LinkContainer></Col>
          <Col sm={2}><LinkContainer to="/contact"><Button>Contact</Button></LinkContainer></Col>
        </Row>
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
