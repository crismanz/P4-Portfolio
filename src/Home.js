import React, { Component } from 'react';
import Head from './Head.js';
import Projects from './Projects.js';
import Skills from './Skills.js';


class Home extends Component {
  render() {
    return (
      <div id="home" className="body">
        <Head />
        <div className="appbody">
          <div className="App-intro">
            <h4>Hello! I am Cristina</h4>
            <p>I am currently enrolled in the full-stack developer program from OpenClassroms, Europes leading, accredited educational platform. <br/>During my path I will lern to: Build a site backend in programming languages such as Ruby.
            <br/>Use front-end libraries or frameworks.
            Manage application deployment and put projects on servers.
            <br/>Perform sysadmin tasks.
            And to run SQL queries on databases.
            </p>
          </div>
          <Projects />
          <Skills />
        </div>
      </div>
    );
  }
}

export default Home;
