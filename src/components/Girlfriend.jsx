import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Girlfriend.css';

/* Pictures */
import la2 from '../Pictures/GF/la2.jpg';
import sf1 from '../Pictures/GF/sf1.JPG';
import sunset from '../Pictures/GF/sunset.jpg';
import garden from '../Pictures/GF/garden.jpg';
import la1 from '../Pictures/GF/la1.jpg';
import sf2 from '../Pictures/GF/sf2.jpg';
import portrait from '../Pictures/GF/portrait.jpg';
import beach from '../Pictures/GF/beach.jpg';
import prom from '../Pictures/GF/prom.JPG';

export class Girlfriend extends Component {
  componentWillMount () {
      this.props.onClick(true);
  }
  render() {
    return(
      <div className="body">
        <h1 className="header">Friendship Compilation - Girlfriend Edition</h1>
        <Grid>
          <h2 className="sub-header">aka Boba Addict</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={la2} className="gf-pic" />
              <Image src={garden} className="gf-pic" />
              <Image src={portrait} className="gf-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={sf1} className="gf-pic" />
              <Image src={la1} className="gf-pic" />
              <Image src={beach} className="gf-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={sunset} className="gf-pic" />
              <Image src={sf2} className="gf-pic" />
              <Image src={prom} className="gf-pic" />
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}
