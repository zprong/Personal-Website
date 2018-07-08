import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import { RouteHandler } from './RouteHandler';
import './App.css';

// let navHeader = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: false };
    this.shouldDisplayBar = this.shouldDisplayBar.bind(this);
  }

  shouldDisplayBar(newState) {
    this.setState( {
      nav: newState
    });
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.nav && <Navbar/>}
          <RouteHandler onClick={this.shouldDisplayBar} />
        </div>
      </Router>
    );
  }
}

export default App;
