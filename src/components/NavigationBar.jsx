import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavigationBar = (props) => {
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
                        navbarScroll
                    >
                        <Nav.Link className='me-5' href="http://localhost:3000/portal/fields">Fields</Nav.Link>
                        <Nav.Link className='me-5' href="http://localhost:3000/portal/responses">Responses</Nav.Link>
                        <NavDropdown className='me-5' title={props.name}>
                            <NavDropdown.Item href="http://localhost:3000/portal/edit">Edit
                                profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Change password</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;