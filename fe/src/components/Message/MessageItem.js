import React from 'react'
import { Col, Row } from 'react-bootstrap'

import dayjs from 'dayjs'
import Avatar from '../Avatar'
import { relativeTime } from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
const MessageItem = ({ mess }) => {
    return (
        <>
            <Row >
                <Col lg={1}>
                    <Avatar name={mess.user.name}
                        image={mess.user.image}
                    />
                </Col>
                <Col>
                    <Row>
                        {mess.text}
                    </Row>
                    <Row style={{ fontSize: '12px', color: '#a3a0a0' }}>{dayjs(mess.createdAt).fromNow()}</Row>
                </Col>
            </Row>
        </>
    )
}

export default MessageItem