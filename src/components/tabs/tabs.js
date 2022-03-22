import React from 'react'
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap'

function App() {
    return (
        <Container Style="margin-top:30px;">
            <Row>
                <Col sm="8">
                    <Nav
                    activeKey="/#"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/#">All Posts(32)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" disabled>Article</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" disabled>Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" disabled>Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" disabled>Job</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div Style="margin:8px;">
                        <div Style="border-bottom:2px solid #EDEEF0;"></div>
                        <div Style="border-bottom:2px solid #5078fD; position:relative; top:-2px; width:74px; margin-left:13px;"></div>
                    </div>
                </Col>
                <Col sm="4">
                    <Button variant="light" Style="background-color:#EDEEF0;">Write a Post</Button>{' '}
                    <Button variant="primary">Join Group</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
