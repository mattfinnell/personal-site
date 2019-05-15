import React from 'react';
import { 
  Landing, Bio, Jobs, Projects, Accolades, 
  Education, ProfessionalNetworkingButtons, Contact 
} from './Sections';
import { Container } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Landing/>
        <Bio/>
        <Jobs/>
        <Projects/>
        <Accolades/>
        <Education/>
        <ProfessionalNetworkingButtons/>
        <Contact/>
      </Container>
    );
  }
}