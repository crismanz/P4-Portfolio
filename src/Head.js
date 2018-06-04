import React, { Component } from 'react';
import Cristina from './Cristina.jpg';
import { SocialIcon } from 'react-social-icons';

class Head extends Component {
  render () {
    return (
      <div>
        <div className="headerImage">
          <table className="tableHead">
            <tbody>
              <tr>
                <td><img src={Cristina} alt="Cristina Manzoni"></img></td>
                <td className="tcontent">
                  <h1>Cristina Manzoni</h1>
                  <h2>Full Stuck Developer</h2>
                  <SocialIcon className="icon" url="https://www.linkedin.com/in/cristina-manzoni-34254411a/" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="icon" url="https://plus.google.com/u/0/100674008347403369531" style={{ height: 25, width: 25 }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Head;
