import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Router, Link } from 'react-router-dom';

class Navigation extends Component {
  render () {
    return (
      <Navbar className="Navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Cristina Manzoni</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <li><Link to="/projects">Projects</Link></li>
            </NavItem>
            <NavItem eventKey={2} href="#skills">
              Skills
            </NavItem>
            <NavItem eventKey={3} href="#footer">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
