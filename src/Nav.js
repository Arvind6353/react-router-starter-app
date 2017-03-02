import React, { Component } from 'react';

import './App.css';

import { Link } from 'react-router'

import {Navbar,NavItem,NavDropdown ,Nav,MenuItem} from 'react-bootstrap';

class NavComp extends Component {
  render() {

        return(
	         <Navbar>
	            <Navbar.Header>
	              <Navbar.Brand>
	                <Link to="/">Home</Link>
	              </Navbar.Brand>
	            </Navbar.Header>
	            <Nav>
	              <NavItem eventKey={1}><Link to="/page1">Page1</Link></NavItem>
	              <NavItem eventKey={2} ><Link to="/page2">Page2</Link></NavItem>
	              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	                <MenuItem eventKey={3.1}>Action</MenuItem>
	                <MenuItem eventKey={3.2}>Another action</MenuItem>
	                <MenuItem eventKey={3.3}>Something else here</MenuItem>
	                <MenuItem divider />
	                <MenuItem eventKey={3.3}>Separated link</MenuItem>
	              </NavDropdown>
	            </Nav>
	          </Navbar>
        )

  }
 


}

export default NavComp;
