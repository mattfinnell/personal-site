import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Education extends React.Component {
  render() {
    return (
      <section id="education" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Education</h2></Col></Row>
        <Row>
          <Col lg={4}><h5>Western Washington University</h5></Col>
          <Col lg={4}><h6>Computer Science BsC</h6></Col>
          <Col lg={4}><p>2016 (Never Finished)</p></Col>
        </Row>
      </section>
    );
  }
}
