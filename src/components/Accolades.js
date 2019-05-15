import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Accolades extends React.Component {
  render() {
    return (
      <section id="accolades" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Side Things</h2></Col></Row>
        <Row>
          <ul>
            <Col className="accolade" md={12}><li><p>Was Featured in <a href="https://mailchi.mp/pythonweekly/python-weekly-issue-318?e=99f5ef4e2f">Python Weekly</a> for a project that would create template Python Flask + Webpack Applicaitons</p></li></Col>
            <Col className="accolade" md={12}><li><p>Was the Treasurer for the WWU ACM for 2 years</p></li></Col>
            <Col className="accolade" md={12}><li><p>Was a Tutor for the WWU Computer Science department for several quarters</p></li></Col>
          </ul>
        </Row>
      </section>
    );
  }
}
