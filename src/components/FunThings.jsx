import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './FunThings.css';

/* Pictures */
import exploring from '../Pictures/DSC_9445.jpg';
import disney from '../Pictures/DSC_2022.jpg';
import photoshoot from '../Pictures/your-name.jpg';
import friends from '../Pictures/DSC_1218.jpg';
import catan from '../Pictures/settlers-of-catan.jpg';
import tangled from '../Pictures/tangled.jpg';

export class FunThings extends Component {
  render() {
    return(
      <div>
        <h1 className="header">Things I Enjoy Doing</h1>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Spending a Day at Disneyland</h3>
              <a href={"https://disneyland.disney.go.com/"} target="_blank">
                <Image src={disney} className="fun-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Exploring</h3>
              <a href={"https://www.visitseattle.org/"} target="_blank">
                <Image src={exploring} className="fun-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Photography</h3>
              <a href={"https://www.yelp.com/biz/hacienda-hills-trails-hacienda-heights"} target="_blank">
                <Image src={photoshoot} className="fun-pic" />
              </a>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Late Nights Out With Friends</h3>
              <a href={"https://www.yelp.com/biz/echo-park-lake-los-angeles-4?osq=park"} target="_blank">
                <Image src={friends} className="fun-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Board Games</h3>
              <a href={"https://www.catan.com/"} target="_blank">
                <Image src={catan} className="fun-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Watching a Good Disney Movie</h3>
              <a href={"https://www.imdb.com/title/tt0398286/"} target="_blank">
                <Image src={tangled} className="fun-pic" />
              </a>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}
