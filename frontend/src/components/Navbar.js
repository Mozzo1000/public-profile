import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export default function NavbarMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">public-profile</Navbar.Brand> 
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link> 
                </Nav>
                {localStorage.getItem('auth') &&
                    <Form inline>
                        <Button variant="danger">Logout</Button>
                    </Form>
                }
                {!localStorage.getItem('auth') &&
                    <Form>
                        <Button href="/login" variant="outline-primary">Login</Button>
                        <Button href="/register" variant="primary">Register</Button>
                    </Form>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}