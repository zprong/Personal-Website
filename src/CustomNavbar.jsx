import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return(
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Zachary Prong</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/Home" to="/Home">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/FunThings" to="/FunThings" >
              Fun things
            </NavItem>
            <NavDropdown
              eventKey={3} componentClass={Link} href="/FriendsIntro" to="/FriendsIntro" title="Friends" id="basic-nav-dropdown"
              noCaret
            >
              <MenuItem eventKey={3.1} componentClass={Link} href="/College" to="/College">College</MenuItem>
              <MenuItem eventKey={3.2} componentClass={Link} href="/Girlfriend" to="/Girlfriend">Girlfriend</MenuItem>
              <MenuItem eventKey={3.3} componentClass={Link} href="/Hs" to="/Hs">High School</MenuItem>
              <MenuItem eventKey={3.4}>Childhood</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} componentClass={Link} href="/Food" to="/Food">
              Food
            </NavItem>
            <NavDropdown
              eventKey={6} componentClass={Link} href="/Projects" to="/Projects" title="Projects" id="basic-nav-dropdown"
              noCaret
            >
              <MenuItem eventKey={6.1} componentClass={Link} href="/College" to="/College">Photography</MenuItem>
              <MenuItem eventKey={6.2} componentClass={Link} href="/Girlfriend" to="/Girlfriend">Coding</MenuItem>
              <MenuItem eventKey={6.3} componentClass={Link} href="/Hs" to="/Hs">HORHS</MenuItem>
              <MenuItem eventKey={6.4}>Film</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
