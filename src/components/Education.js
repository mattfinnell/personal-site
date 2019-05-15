import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Education extends React.Component {
  render() {
    return (
      <section id="education" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Education</h2></Col></Row>
        <Row>
          <Col md={5}><h4>Western Washington University</h4></Col>
          <Col md={4}><h5>Computer Science BsC</h5></Col>
          <Col md={3}><p>2016 (Never Finished)</p></Col>
        </Row>
      </section>
    );
  }
}
