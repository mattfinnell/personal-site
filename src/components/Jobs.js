import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Job from '../components/Job';

export default class Jobs extends Component {
  constructor(props){
    super(props);

    this.state = { 
      jobs: [] 
    }
  }

  componentWillMount() {
    axios.get(process.env.PUBLIC_URL + '/jobs.json')
      .then(response => {
        this.setState({jobs: response.data});
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <section id="jobs" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Where I have Worked</h2></Col></Row>
        {this.state.jobs.map((job, i) => <Job job={job} key={i}/>)}
      </section >
    );
  }
}
