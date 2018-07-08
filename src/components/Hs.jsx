import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Hs.css';

/* Pictures */
// OG 3
import mr2015 from '../Pictures/OG3/mr2015.jpg';
import king from '../Pictures/OG3/king.jpg';
import val from '../Pictures/OG3/val.jpg';
import airport from '../Pictures/OG3/IMG_5034.JPG';
import banquet from '../Pictures/OG3/IMG_3931.JPG';
import farrels from '../Pictures/OG3/farrels.jpg';
// Shenanigang
import bw from '../Pictures/Shenanigang/bw.JPG';
import cafe from '../Pictures/Shenanigang/cafe.jpg';
import disney from '../Pictures/Shenanigang/disney.PNG';
// Boardgames
import aph from '../Pictures/BG/aph.jpg';
import beach from '../Pictures/BG/beach.jpg';
import sunset from '../Pictures/BG/sunset.jpg';
import disney2 from '../Pictures/BG/disney.jpg';
import carsland from '../Pictures/BG/carsland.jpg';
import grove from '../Pictures/BG/grove.jpg';
// BFOB
import bridge from '../Pictures/BFOB/bridge.jpg';
import drumline from '../Pictures/BFOB/drumline.jpg';
import grad from '../Pictures/BFOB/grad.jpg';
import horhs from '../Pictures/BFOB/horhs.png';
import la from '../Pictures/BFOB/la.jpg';
import leaving from '../Pictures/BFOB/leaving.PNG';
import meet from '../Pictures/BFOB/meet.jpg';
import moms from '../Pictures/BFOB/moms.jpg';
import sd from '../Pictures/BFOB/sd.jpg';


export class Hs extends Component {
  render() {
    return(
      <div>
        <h1 className="header">Friendship Compilation - High School Edition</h1>
        <Grid>
          <h2 className="sub-header">The Shenanigang</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={bw} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={cafe} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={disney} className="hs-pic" />
            </Col>
          </Row>

          <h2 className="sub-header">The OG3</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={mr2015} className="hs-pic" />
              <Image src={airport} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={king} className="hs-pic" />
              <Image src={banquet} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={val} className="hs-pic" />
              <Image src={farrels} className="hs-pic" />
            </Col>
          </Row>

          <h2 className="sub-header">Boardgames and M&M Donuts</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={aph} className="hs-pic" />
              <Image src={disney2} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={beach} className="hs-pic" />
              <Image src={carsland} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={sunset} className="hs-pic" />
              <Image src={grove} className="hs-pic" />
            </Col>
          </Row>

          <h2 className="sub-header">Benson Farts on Beds</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={bridge} className="hs-pic" />
              <Image src={horhs} className="hs-pic" />
              <Image src={drumline} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={la} className="hs-pic" />
              <Image src={grad} className="hs-pic" />
              <Image src={meet} className="hs-pic" />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={moms} className="hs-pic" />
              <Image src={leaving} className="hs-pic" />
              <Image src={sd} className="hs-pic" />
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}
