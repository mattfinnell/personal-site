import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default class Job extends React.Component {
  render() {
    return (
      <div className="job">
        <Row>
          <Col lg={9} className="company"><h4>{this.props.job.company}</h4></Col>
          <Col lg={3} className="job-title text-right"><p>{this.props.job.position}</p></Col>
        </Row>
      </div>
    )
  }
}
