import React from 'react'
import { Row, Col } from 'react-bootstrap'
import classNames from 'classnames/bind'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import styles from './index.css'

import Avatar from '../../Avatar'

dayjs.extend(relativeTime)

const cx = classNames.bind(styles)

const RoomItem = ({ item, update }) => {

    return (
        <Row className='my-3' onClick={() => update(item)}>
            <Col xs={2}>
                <Avatar name={item.user.name} image={item.user.image} />
            </Col>
            <Col xs={10} className='d-none d-md-block'>
                <Row style={{ color: '#050505', fontSize: '14px' }}>{item.user.name}</Row>
                <Row style={{ fontSize: '12px', color: '#65676b' }}>
                    <Col xs={8}>
                        <div className={cx('last-message')}>{item.lastMessage.text}</div>
                    </Col>
                    <Col xs={4}>{dayjs(item.lastMessage.createdAt).fromNow()} </Col>
                </Row>
            </Col>
        </Row >
    )
}

export default RoomItem