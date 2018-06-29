import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import seattleImg from './Pictures/seattle.jpg';

export class Home extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to My Website!</h2>
          <p>I've gotten pretty good at this huh?</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={seattleImg} circle className="profile-pic" />
            <p> My name Zcach! </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
