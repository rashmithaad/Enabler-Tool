import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Navbar bg="black" height="30px" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/home" style={{ marginLeft: '-70px', marginTop: '-5px' }}>
          <img
            src="./logo.png"
            height="40px"
            className="d-inline-block align-top mr-2"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {isLoggedIn && (
              <Button variant="outline-light" className="ml-2" onClick={handleLogoutClick}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
