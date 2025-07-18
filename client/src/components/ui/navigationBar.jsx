import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function NavigationBar () {
 return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to={"/"}><Navbar.Brand href="#home">MyBlog</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3 ml-6">
              <Nav.Link href="#home">About Us</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tech</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Socials
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Economics</NavDropdown.Item>
              </NavDropdown>
              <Link to={"/contact"}><Nav.Link href="#lin">Contact Us</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
 )
}

export default NavigationBar