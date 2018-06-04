import React, { Component } from 'react';
import Project from './Project.js';
import img11 from './Project1/Screenshot1.png';
import img21 from './Project2/Screenshot1.png';

const projects = [{
  title: "Real estate agency",
  description: "Web page created with Wordpress for a real estate agency.",
  image: [img11]
},{
  title: "Film Festival",
  description: "Web page created with html5 and css3 using bootstrap for an outdoor film festival.",
  image: [img21]
}]

class Projects extends Component {
  render () {
    return (
      <div id="projects" className="projects">
        <h3 className="title">PROJECTS</h3>
        <p> Until now during my OpenClassrooms program I made the following projects. <br/>I build a web page for a real estate agency using Wordpress and a web page for a film festival using html5 and css3.</p>
        <div className="container">
          <div className="row">
            {projects.map(function(project, i){
                return (
                  <div key={i} className="col-lg-6">
                    <Project data={project}/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}


export default Projects;
