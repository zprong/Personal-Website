import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home.jsx';
import { FunThings } from './components/FunThings.jsx';
import { Friends } from './components/Friends.jsx';
import { Projects } from './components/Projects.jsx';
import { Food } from './components/Food.jsx';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/FunThings" component={FunThings} />
          <Route path="/Friends" component={Friends} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Food" component={Food} />
        </div>
      </Router>
    );
  }
}

export default App;
