import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <Row>
          <Col md={12}>
            <h3>
              <a className="project-name" href={this.props.project.link}>{this.props.project.name}</a>
              <span>{this.props.project.tools.map(tool => <i className={"tool fab fa-" + tool} key={tool}/>)}</span>
            </h3>
          </Col>
        </Row>
        <Row><Col md={12}><p>{this.props.project.description}</p></Col></Row>
      </div>
    )
  }
}
