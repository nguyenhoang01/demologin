import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = ({ isLoggedIn, userInfo, handleLogout }) => {
    return (
        <Navbar style={{ backgroundColor: '#74412c' }} variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact activeClassName="active">
                            Nữ  
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/rooms/phongs" activeClassName="active">
                            Nam
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/rooms/phongs" activeClassName="active">
                           Trẻ Em
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/users" activeClassName="active">
                            Bộ Sưu Tập
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/chat" activeClassName="active">
                            Về Chúng tôi
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            <NavDropdown title={userInfo?.first_name || 'User'}>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <NavDropdown title="Setting">
                                <NavDropdown.Item href="/logins">Login</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
