import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../components/Project';
import axios from 'axios';

export default class Projects extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      projects : [] 
    }
  }

  componentWillMount() {
    axios.get('https://s3-us-west-2.amazonaws.com/mattfinnell-io-frontend/projects.json')
      .then(response => {
        this.setState({projects: response.data});
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Row><h1>Projects</h1></Row>
        {this.state.projects.map(project => <Project project={project} key={project.name}/>)}
      </Container>
    );
  }
}
