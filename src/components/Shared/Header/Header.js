import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#home">Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home">
              <Nav.Link>Home</Nav.Link>
            </NavLink>
            <Link to="/services">
              <Nav.Link >Services</Nav.Link>
            </Link>
            <NavLink to="/about">
              <Nav.Link>About</Nav.Link>
            </NavLink>
            <NavLink to="/contact">
              <Nav.Link>Contact us</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {user ? (
          <button className="btn btn-sm btn-primary" onClick={logOut}>
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-primary">Log In</button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
