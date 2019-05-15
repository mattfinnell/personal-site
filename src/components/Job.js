import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default class Job extends React.Component {
  render() {
    return (
      <div className="job">
        <Row>
          <Col md={9} className="company"><h4>{this.props.job.company}</h4></Col>
          <Col md={3} className="job-title"><p>{this.props.job.position}</p></Col>
        </Row>
      </div>
    )
  }
}
