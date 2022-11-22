import React, { useState } from 'react';
import classNames from 'classnames/bind';


import styles from './index.css';

import RoomItem from '../../components/ChatRoom/RoomItem';

import { Row, Col } from 'react-bootstrap';
import ChatWindow from '../../components/ChatRoom/ChatWindow';

import ChatRoom from '../../assets/dummy-data/chats.json';

const cx = classNames.bind(styles);
const Chat = () => {


    const [chatmate, setChatmate] = useState({})
    const handleChangeChatItem = (user) => {
        setChatmate(user)
    }
    return (
        <>
            <Row>
                <Col xs={4} className={cx('room-list')}>
                    {ChatRoom.map((item) => (<RoomItem item={item} key={item.id} update={handleChangeChatItem} />))}
                </Col>
                <Col xs={8} className={cx('chat-list')}>
                    <ChatWindow mate={chatmate} defaultChatmate={ChatRoom[0]} />
                </Col>
            </Row>
        </>
    )
};

export default Chat;

