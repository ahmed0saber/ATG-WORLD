import React from 'react'
import { Container, Row, Col, Alert, Form, Navbar, Nav, Button } from 'react-bootstrap'
import image from './Group 3.svg'
import facebook from './f_logo_RGB-Blue_1024.svg'
import google from './search.svg'
import { NavLink } from 'react-router-dom'

function App() {
    return (
        <div Style="width:100%;min-height:100vh;display:grid;place-items:center;background:#08080877;position:fixed;top:0;left:0;">
        <Container className="rounded" Style="margin-top:30px;max-width:800px;background:white;padding:0;position:relative;">
            <NavLink to="/" Style="position:absolute;top:-10px;right:10px;z-index:10;font-size:26px;font-weight:bold;padding:8px;cursor:pointer;text-decoration:none;color:black;">x</NavLink>
            <Alert className="w-100" variant="success">
                <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </Alert>
            <Row className="p-3">
                <Col sm="6">
                    <h3>Sign In</h3>
                    <Form>
                        <Form.Group>
                            <Form.Control Style="border-radius:0px;height:46px;background:#F7F8FA;" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control Style="border-radius:0px;height:46px;background:#F7F8FA;" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button Style="border-radius:20px;padding:8px;" className="w-100 mt-3" variant="primary" type="submit">
                            Sign In
                        </Button>
                        <div className="p-1 border mt-3" Style="display:flex;justify-content:center;align-items:center;cursor:pointer;">
                            <img className="m-2" src={facebook} alt="Facebook"/>
                            <strong>Sign in with Facebook</strong>
                        </div>
                        <div className="p-1 border mt-3" Style="display:flex;justify-content:center;align-items:center;cursor:pointer;">
                            <img className="m-2" src={google} alt="Google"/>
                            <strong>Sign in with Google</strong>
                        </div>
                        <NavLink to="/" Style="text-decoration:none;display:block;margin:10px auto;width:fit-content;font-weight:bold;">Forgot Password?</NavLink>
                    </Form>
                </Col>
                <Col sm="6">
                <Nav>
                    <NavLink className="m-auto" to="/signup">
                        Don't have an account yet? <span Style="color: #2F6CE5; font-weight:bold;">Create new for free!</span>
                    </NavLink>
                </Nav>
                <img src={image} alt="join us"/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default App;
