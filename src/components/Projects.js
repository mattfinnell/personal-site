import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from './Project';
import axios from 'axios';

export default class Projects extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      projects : [] 
    }
  }

  componentWillMount() {
    axios.get(process.env.PUBLIC_URL + '/projects.json')
      .then(response => {
        this.setState({projects: response.data});
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <section id="projects" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Projects</h2></Col></Row>
        {this.state.projects.map(project => <Project project={project} key={project.name}/>)}
      </section>
    );
  }
}
