import React from 'react'
import logo from './whole.svg'
import { Navbar, Container, Nav, Row, Col, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function App() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
            <Row className="w-100" Style="display:flex; flex-direction:row; justify-content:center; align-items:center;">
                <Col sm="4">
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                </Col>
                <Col sm="8">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Row className="w-100">
                            <Col sm="6">
                            <Form>
                                <Form.Group Style="position:relative; top:8px;" className="mb-3" controlId="formBasicEmail">
                                    <Form.Control Style="border-radius:20px; background-color:#f2f2f2; border:none;" type="email" placeholder="Search for your favorite groups in ATG" />
                                </Form.Group>
                            </Form>
                            </Col>
                            <Col sm="6" Style="display:flex; flex-direction:row; justify-content:center; align-items:center;">
                                <Nav>
                                    <NavLink Style="text-decoration:none;" className="m-auto" to="signup">
                                        Create account. <span Style="color: #2F6CE5; font-weight:bold;">It’s free!</span>
                                    </NavLink>
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Col>
            </Row>
            </Container>
        </Navbar>
    )
}

export default App;
