import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logo-2.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={{}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
            {user ? (
              <>
                <p className="text-white mt-2 me-2">{user.displayName}</p>
                <button className="btn btn-sm btn-primary" onClick={logOut}>
                  Log out
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn  btn-primary btn-sm">Log In</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
