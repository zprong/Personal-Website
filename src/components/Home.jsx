import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import seattle from '../Pictures/seattle.jpg';

export class Home extends Component {
  componentWillMount() {
    this.props.onClick(true);
  }

  render() {
    return(
      <Grid className="body">
        <Jumbotron>
          <h2>Welcome to My Website!</h2>
          <p>Wubba lubba dub dub!</p>
          <Link to="/Friends">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={seattle} className="profile-pic" />
            <h3>Zach</h3>
            <p>My name Zcach!</p>
          </Col>
          <Col xs={12} sm={8} className="intro">
            <h2>Introduction</h2>
            <p>This is a remaking of my original HTML/CSS project, now done with React.js.
                Throughout this page, you can learn plenty of things about myself and the life I've lived
                as of June 2018. Hope you enjoy! </p>
            <h2>A Little About Me</h2>
            <p>My name is Zachary Prong, but I usually go by Zach! I currently live in West Covina,
                CA and attend UCLA as an incoming 4th year undergraduate studying
                Computer Science. Many people characterize me best as an optimistic
                person who you'll always see smiling (which I'm very proud of). I
                very much enjoy talking to people, whether it be old or new friends
                so please hit me up if you ever want to chat! I love getting to know people,
                and genuinely appreciate it when you share about yourself. Something I aim to
                achieve is to always give love, spread happiness, and encourage others.</p>

          </Col>
        </Row>
      </Grid>
    );
  }
}
