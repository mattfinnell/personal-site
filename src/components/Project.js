import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Project extends React.Component {
  render() {
    return (
      <Row className="project">
        <Col xs={12}>
          <Row><h3><a href={this.props.project.link}>{this.props.project.name}</a></h3></Row>
          <Row><p>{this.props.project.description}</p></Row>
          <Row>
            <span>Tools Used | </span>
            {this.props.project.tools.map(tool => <i className={"fab fa-" + tool} key={tool}/>)}
          </Row>
        </Col>
      </Row>
    )
  }
}
