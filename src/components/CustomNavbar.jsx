import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onClick(true);
  }
  
  render() {
    return(
      <Navbar staticTop>
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
            <NavItem eventKey={2} componentClass={Link} href="/FunThings" to="/FunThings" >
              Fun things
            </NavItem>
            <NavDropdown eventKey={3} title="Friends" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} componentClass={Link} href="/College" to="/College" onClick={this.handleChange} >College</MenuItem>
              <MenuItem eventKey={3.2} componentClass={Link} href="/Girlfriend" to="/Girlfriend">Girlfriend</MenuItem>
              <MenuItem eventKey={3.3} componentClass={Link} href="/Hs" to="/Hs">High School</MenuItem>
              <MenuItem eventKey={3.4}>Childhood</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} componentClass={Link} href="/Food" to="/Food">
              Food
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
