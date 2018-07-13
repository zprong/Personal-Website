import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';

import mpark from '../Pictures/park.jpg';
import coding from '../Pictures/coding.png';
import humans from '../Pictures/BFOB/horhs.png';
import filmTeam from '../Pictures/film-team.jpg';

export class Projects extends Component {
  componentWillMount() {
    this.props.onClick(true);
  }

  render() {
    return (
      <div className="projects-container body">
        <Row className="projects-row show-grid">
          <Col sm={6} className="projects-col">
            <h1 className="projects-text" href="/Home">Photography Portfolio</h1>
            <Link to="/Home">
              <Image href="/Home" src={mpark} alt="Morningside Park" className="projects-image"/>
            </Link>
          </Col>
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">Coding Projects</h1>
            <Link to="/Home">
              <Image href="/Home" src={coding} alt="coding" className="projects-image"/>
            </Link>
          </Col>
        </Row>
        <Row className="projects-row show-grid">
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">Humans of Rowland High School</h1>
            <Link to="/Home">
              <Image href="/Home" src={humans} alt="Humans of Rowland HS" className="projects-image"/>
            </Link>
          </Col>
          <Col sm={6} className="projects-col">
            <h1 className="projects-text">Film Collection</h1>
            <Link to="/Home">
              <Image href="/Home" src={filmTeam} alt="First Film Team" className="projects-image"/>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
