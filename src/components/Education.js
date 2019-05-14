import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Education extends React.Component {
  render() {
    return (<section className="education">
      <Row><Col md={12} className="text-center"><h2>Where I went to School</h2></Col></Row>
      <Row>
        <Col md={5}><h4>Western Washington University</h4></Col>
        <Col md={4}><p>Computer Science</p></Col>
        <Col md={3}><p>2016 (Never Graduated)</p></Col>
      </Row>
    </section>);
  }
}
