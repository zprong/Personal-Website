import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './College.css';

/* Pictures */
import beach from '../Pictures/TT/DSC_3290.jpg';
import lacma from '../Pictures/TT/DSC_0413.jpg';
import getty from '../Pictures/TT/DSC_9139.jpg';
import crossing from '../Pictures/TT/crossing.jpg';
import lacma2 from '../Pictures/TT/DSC_2842.jpg';
import rooftop from '../Pictures/TT/sunset.png';
import sul from '../Pictures/TT/DSC_0291.jpg';
import sunny from '../Pictures/TT/DSC_7608.jpg';
import ryan from '../Pictures/TT/DSC_7513.jpg';

export class College extends Component {
  componentWillMount () {
      this.props.onClick(true);
  }
  render() {
    return(
      <div className="body">
        <h1 className="header">Friendship Compilation - College Edition</h1>
        <Grid>
          <h2 className="sub-header">Theta Tau at UCLA</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={beach} className="college-pic" />
              <Image src={lacma} className="college-pic" />
              <Image src={sul} className="college-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={crossing} className="college-pic" />
              <Image src={lacma2} className="college-pic" />
              <Image src={rooftop} className="college-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={getty} className="college-pic" />
              <Image src={sunny} className="college-pic" />
              <Image src={ryan} className="college-pic" />
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}
