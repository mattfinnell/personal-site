import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="site-section">
        <Row><Col md={12} className="text-center"><h2>Contact</h2></Col></Row>
        <p className="text-center">I'm not too big on throwing my contact information super freely around on the internet so I would say the best way to get ahold of me is to send me a message via <a href="https://www.linkedin.com/in/mattfinnell/">LinkedIn</a>.</p>
        <p className="text-center">Hope to hear from ya soon!</p>
      </section>
    )
  }
}
