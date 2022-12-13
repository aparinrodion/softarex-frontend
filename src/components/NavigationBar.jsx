import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import jwt_decode from "jwt-decode"
import authService from "../service/AuthService";
import {useNavigate} from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();

    function logout() {
        authService.logout();
        navigate("http://localhost:8080")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav
                        className="my-0"
                        style={{
                            maxHeight: '100px',
                            marginRight: '10%'
                        }}
                        navbarScroll>
                        <Nav.Link className='me-5'
                                  href="http://localhost:3000/portal/questionnaires">Questionnaires</Nav.Link>
                        <Nav.Link className='me-5' href="http://localhost:3000/portal/responses">Responses</Nav.Link>
                        <NavDropdown className='me-5' title={jwt_decode(localStorage.getItem("token")).name}>
                            <NavDropdown.Item href="http://localhost:3000/portal/edit">Edit
                                profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Change password</NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;