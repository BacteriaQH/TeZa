import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';


import styles from './index.css';

import RoomItem from '../../components/ChatRoom/RoomItem';
import ChatRoom from '../../data/ChatRoom';

import { Row, Col } from 'react-bootstrap';
import ChatWindow from '../../components/ChatRoom/ChatWindow';


const cx = classNames.bind(styles);
const Chat = () => {


    const [chatUser, setChatUser] = useState({})
    const handleChangeChatItem = (user) => {
        console.log(user)
        setChatUser(user)
    }
    return (
        <>
            <Row>
                <Col xs={4} className={cx('room-list')}>
                    {ChatRoom.map((item) => (<RoomItem item={item} key={item.id} update={handleChangeChatItem} />))}
                </Col>
                <Col xs={8} className={cx('chat-list')}>
                    <ChatWindow user={chatUser} />
                </Col>
            </Row>
        </>
    )
};

export default Chat;
