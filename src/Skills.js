import React, { Component } from 'react';
import css3 from './icons/css3.png';
import html5 from './icons/html5.png';
import react from './icons/react.png';
import wordpress from './icons/wordpress.png';
import javascript from './icons/js.png';

class Skills extends Component {
  render () {
    return (
      <div id="skills" className="skills" align="center">
        <h3 className="title">SKILLS</h3>
        <table>
          <tbody>
            <tr className="icons">
              <td className="table"><img src={wordpress} alt="Wordpress" /></td>
              <td className="table"><img src={html5} alt="Html5" /></td>
              <td className="table"><img src={css3} alt="Css3" /></td>
              <td className="table"><img src={react} alt="React" /></td>
              <td className="table"><img src={javascript} alt="JavaScript" /></td>
            </tr>
            <tr>
              <td className="table">Wordpress</td>
              <td className="table">Html5</td>
              <td className="table">Css3</td>
              <td className="table">React</td>
              <td className="table">JavaScript</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Skills;
