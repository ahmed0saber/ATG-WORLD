import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
                    <p><i class="fa fa-location-dot"></i> <strong>Noida, India</strong> <i class="fa fa-pen"></i></p>
                    <p><i class="fa fa-info"></i> Your location will help us serve better and extend a personalised experience.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
