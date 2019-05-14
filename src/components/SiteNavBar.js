import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class SiteNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <LinkContainer to="/"><Navbar.Brand>Matt Finnell</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                        <Nav.Link href="https://github.com/mattfinnell"><i className="fab fa-github"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/mattfinnell/"><i className="fab fa-linkedin"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
