import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Friends.css';

import tt from '../Pictures/rush.JPG';
import balboa from '../Pictures/GF/balboa.jpg';
import grad from '../Pictures/BFOB/grad.jpg';
import cars from '../Pictures/BG/cars.jpg';

export class Friends extends Component {
  componentWillMount() {
    this.props.onClick(true);
  }

  render() {
    return (
      <div className="projects-container body">
        <Row className="projects-row show-grid">
          <Col sm={6} className="projects-col">
            <h1 className="projects-text" href="/Home">College</h1>
            <Link to="/Home">
              <Image href="/College" src={tt} alt="Spring Rush Picture" className="projects-image"/>
            </Link>
          </Col>
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">Girlfriend</h1>
            <Link to="/Girlfriend">
              <Image href="/Home" src={balboa} alt="Balboa Park Portrait" className="projects-image"/>
            </Link>
          </Col>
        </Row>
        <Row className="projects-row show-grid">
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">High School</h1>
            <Link to="/Hs">
              <Image href="/Home" src={grad} alt="Graduation Ceremony" className="projects-image"/>
            </Link>
          </Col>
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">Childhood</h1>
            <Link to="/Home">
              <Image href="/Home" src={cars} alt="Cars Land" className="projects-image"/>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
