import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import moment from 'moment'

import Avatar from '../../Avatar'


const ChatItem = ({ item, update }) => {

    return (
        <Row className='my-3' onClick={() => update(item)}>
            <Col xs={2}>
                <Avatar name={item.users[1].name} />
            </Col>
            <Col xs={10} className='d-none d-md-block'>
                <Row style={{ color: '#050505', fontSize: '14px' }}>{item.users[1].name}</Row>
                <Row style={{ fontSize: '12px', color: '#65676b' }}>
                    <Col xs={8}>{item.lastMessage.content}</Col>
                    <Col xs={4}>{moment(item.lastMessage.createdAt).startOf('week').fromNow()} </Col>
                </Row>
            </Col>
        </Row >
    )
}

export default ChatItem