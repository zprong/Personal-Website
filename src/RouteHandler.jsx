import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home } from './components/Home.jsx';
import { FunThings } from './components/FunThings.jsx';
import { College } from './components/College.jsx';
import { Friends } from './components/Friends.jsx';
import { Girlfriend } from './components/Girlfriend.jsx';
import { Hs } from './components/Hs.jsx';
// import { Projects } from './components/Projects.jsx';
import { Food } from './components/Food.jsx';

export class RouteHandler extends Component {
  render() {
    return(
      <div>
        <Route exact path="/"     render={(props) => <Home {...props} onClick={this.props.onClick}/>} />
        <Route path="/FunThings"  component={FunThings} />
        <Route path="/Friends"    render={(props) => <Friends {...props} onClick={this.props.onClick}/>} />
        <Route path="/College"    component={College} />
        <Route path="/Girlfriend" component={Girlfriend} />
        <Route path="/Hs"         component={Hs} />
        <Route path="/Food"       component={Food} />
      </div>
    );
  }
}
