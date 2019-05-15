import React from 'react';
import { 
  Landing, Bio, Jobs, Projects, Accolades, 
  Education, ProfessionalNetworkingButtons, Contact 
} from './Sections';
import { Container } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <Container className="site">
        <Landing/>
        <Bio/>
        <Jobs/>
        <Projects/>
        <Accolades/>
        <Education/>
        <Contact/>
        <ProfessionalNetworkingButtons/>
      </Container>
    );
  }
}