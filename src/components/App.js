import React from 'react';
import { 
  Landing, Bio, Jobs, Projects, Accolades, 
  Education, ProfessionalNetworkingButtons, Contact 
} from './Sections';
import { Container } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Container id="landing-container">
          <Landing/>
        </Container>
        <Container id="site">
          <Bio/>
          <Jobs/>
          <Projects/>
          <Accolades/>
          <Education/>
          <Contact/>
          <ProfessionalNetworkingButtons/>
        </Container>
      </div>
    );
  }
}