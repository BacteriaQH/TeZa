import React from 'react'
import { Col, Row } from 'react-bootstrap'

import moment from 'moment'
import Avatar from '../Avatar'

const MessageItem = ({ mess }) => {
    return (
        <>
            <Row>
                <Col lg={1}><Avatar name={mess.user.name} /></Col>
                <Col>
                    <Row>
                        {mess.content}
                    </Row>
                    <Row style={{ fontSize: '12px', color: '#a3a0a0' }}>{moment(mess.createdAt).startOf('day').fromNow()}</Row>
                </Col>
            </Row>
        </>
    )
}

export default MessageItem