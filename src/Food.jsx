import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Food.css';

/* Pictures */
import curry from '../Pictures/curryhut.jpg';
import sushi from '../Pictures/showsushi.jpg';
import kbbq from '../Pictures/mrbbq.jpg';
import tacos from '../Pictures/tacodelrio.jpg';
import korean from '../Pictures/loveletter.jpg';
import donuts from '../Pictures/birdies.jpg';

export class Food extends Component {
  componentWillMount () {
      this.props.onClick(true);
  }

  render() {
    return(
      <div className="body">
        <h1 className="header">Food Recommendations</h1>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Curry Hut - Fullerton, CA</h3>
              <a href={"https://www.yelp.com/biz/curry-hut-indian-food-fullerton"} target="_blank">
                <Image src={curry} className="food-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Mr. BBQ - Fullerton, CA</h3>
              <a href={"https://www.yelp.com/biz/mr-bbq-fullerton"} target="_blank">
                <Image src={kbbq} className="food-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Love Letter - Rowland Heights, CA</h3>
              <a href={"https://www.yelp.com/biz/love-letter-pizza-and-chicken-rowland-heights"} target="_blank">
                <Image src={korean} className="food-pic" />
              </a>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Show Sushi - San Dimas, CA</h3>
              <a href={"https://www.yelp.com/biz/show-sushi-san-dimas"} target="_blank">
                <Image src={sushi} className="food-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Taco Del Rio - La Puente, CA</h3>
              <a href={"https://www.yelp.com/biz/taco-del-rio-la-puente"} target="_blank">
                <Image src={tacos} className="food-pic" />
              </a>
            </Col>
            <Col xs={12} sm={4} className="food-wrapper">
              <h3>Birdies - Downtown LA, CA</h3>
              <a href={"https://www.yelp.com/biz/birdies-los-angeles-3"} target="_blank">
                <Image src={donuts} className="food-pic" />
              </a>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}
