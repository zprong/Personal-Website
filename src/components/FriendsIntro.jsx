import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FriendsIntro.css';
import grad from '../Pictures/HS/grad.jpg';


export class FriendsIntro extends Component {
  componentWillMount() {
    this.props.onClick(false);
  }

  render() {
    return (
      <div className="friends-container body">
        <div className="friends-content">
          <h2 className="caption">Friendship Compilation</h2>
          <Link to="/Friends" >
            <Button bsStyle="primary">Get Started</Button>
          </Link>
        </div>
        <Image src={grad} alt="bg" className="bg"/>
      </div>
    );
  }
}
