import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import moment from 'moment'
const ChatItem = ({ item }) => {
    return (
        <Row className='my-3'>
            <Col lg={2}>
                <Image src={item.users[1].imageUri} style={{ width: '40px', height: '40px', borderRadius: '100px' }} />
            </Col>
            <Col lg={10}>
                <Row style={{ color: '#050505', fontSize: '14px' }}>{item.users[1].name}</Row>
                <Row style={{ fontSize: '12px', color: '#65676b' }}>
                    <Col lg={8}>{item.lastMessage.content}</Col>
                    <Col lg={4}>{moment(item.lastMessage.createdAt).startOf('week').fromNow()} </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ChatItem