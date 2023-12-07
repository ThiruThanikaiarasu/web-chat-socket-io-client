import React from 'react'
import { ListGroup } from 'react-bootstrap'

const SidebarComponent = () => {

    const rooms = ['general', 'random']

    return (
        <React.Fragment>
            
            <h2>Available Channel</h2>
            <ListGroup>
                {rooms.map((room, index) => (
                    <ListGroup.Item key={index}>
                        {room}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h2>Direct Message</h2>
        </React.Fragment>
    )
}

export default SidebarComponent