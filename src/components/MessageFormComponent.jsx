import React from 'react'
import {Col, Row, Form, Button} from 'react-bootstrap'
import './MessageFormComponent.css'

const MessageFormComponent = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <React.Fragment>
            <div className="messages-output"></div>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col md={11}>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Your message"></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{width : "100%", backgroundColor : "blue"}}>
                            <i className='fas fa-paper-plane '></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    )
}

export default MessageFormComponent