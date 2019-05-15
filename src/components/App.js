import React from 'react';
import { 
  Landing, Bio, Jobs, Projects, Accolades, 
  Education, ProfessionalNetworkingButtons, Contact 
} from './Sections';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Landing/>
        <Bio/>
        <Jobs/>
        <Projects/>
        <Accolades/>
        <Education/>
        <ProfessionalNetworkingButtons/>
        <Contact/>
      </div>
    );
  }
}