import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Friends.css';
import grad from '../Pictures/HS/grad.jpg';


export class Friends extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onClick(true);
  }

  render() {
    return (
      <div className="friends-container">
        <div className="friends-content">
          <h2 className="caption">Friendship Compilation</h2>
          <Link to="/College" >
            <Button bsStyle="primary" onClick={this.handleChange}>Get Started</Button>
          </Link>
        </div>
        <Image src={grad} alt="bg" className="bg"/>
      </div>
    );
  }
}
