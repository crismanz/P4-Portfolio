import React, { Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Home from './Home.js'


class Navigation extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar className="Navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <Link exact to="/">Cristina Manzoni</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  <Link exact to="/projects" className="nLink">Projects</Link>
                </NavItem>
                <NavItem>
                  <Link exact to="/skills" className="nLink">Skills</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </div>
      </Router>
    );
  }
};

export default Navigation;
