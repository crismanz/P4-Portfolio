import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class Footer extends Component {
  render () {
    return (
      <footer id="footer" className="footer">
        <h3 className="footertitle">CONTACT ME</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-2">
              <p><strong>Cristina Manzoni</strong> <br /> Full Stack Developer</p>
            </div>
            <div className="col-sm-3">
              <p><strong>Email:</strong><br /> cristina.manzoni@outlook.com</p>
            </div>
            <div className="col-sm-1">
              <SocialIcon className="icon" url="https://www.linkedin.com/in/cristina-manzoni-34254411a/" style={{ height: 25, width: 25 }} />
              <SocialIcon className="icon" url="https://plus.google.com/u/0/100674008347403369531" style={{ height: 25, width: 25 }} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
