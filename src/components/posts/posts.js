import React from 'react'
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap'
import Post from './post'
import Job from './job'
import Meetup from './meetup'

function App() {
    return (
        <Container Style="margin-top:30px;">
            <Row>
                <Col sm="8">
                    <Post/>
                    <Meetup/>
                    <Job/>
                </Col>
                <Col sm="4" className="mt-4">
                    <p><strong>Noida, India</strong></p>
                    <p>Your location will help us serve better and extend a personalised experience.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
