import React, { Component } from 'react';

class Project extends Component {
 render () {
   return (
     <div className="project">
       <p className="projectTitle"><strong>{this.props.data.title}</strong></p>
       <p className="projectDescription">{this.props.data.description}<br/></p>
       <img className="projectImage" width={470} height={244} src={this.props.data.image} alt="screenshot" />
     </div>
   );
 }
}

export default Project;
