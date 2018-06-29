import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return(
      <Navbar default collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Zachary Prong</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/FunThings" to="/FunThings">
              Fun things
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/Friends" to="/Friends">
              Friends
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/Projects" to="/Projects">
              Projects
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/Food" to="/Food">
              Food
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
