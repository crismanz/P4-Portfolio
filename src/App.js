import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="home" className="body">
          <Navigation />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
