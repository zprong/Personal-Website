import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Intro.css';
import grad from '../Pictures/DSC_0020.jpg';


export class Intro extends Component {
  componentWillMount() {
    this.props.onClick(false);
  }

  render() {
    return (
      <div className="intro-container">
        <div className="intro-content">
          <h2 className="caption">Welcome to My Page!</h2>
          <Link to="/Home" >
            <Button bsStyle="primary">Get Started</Button>
          </Link>
        </div>
        <Image src={grad} alt="bg" className="bg"/>
      </div>
    );
  }
}
