import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SidebarComponent from '../components/SidebarComponent'
import MessageFormComponent from '../components/MessageFormComponent'

const Chat = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <SidebarComponent/>
                </Col>
                <Col md={8}>
                    <MessageFormComponent/>
                </Col>
            </Row>
        </Container>
    )
}

export default Chat