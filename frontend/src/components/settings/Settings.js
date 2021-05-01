import React from 'react'
import { Container, Tab, Col, Row, Nav, Card } from 'react-bootstrap';
import ProfileSettings from './ProfileSettings'

export default function Settings() {
    return(
        <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Card>
                <Card.Body>
                    <Col>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Profile information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Account Settings</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                </Card.Body>
            </Card>
            <Col>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <ProfileSettings/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <p>hi 2</p>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </Container>
    )
}