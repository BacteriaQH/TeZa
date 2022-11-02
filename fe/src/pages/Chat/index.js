import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatItem from '../../components/ChatItem';
import ChatRoom from '../../data/ChatRoom';

import { Row, Col } from 'react-bootstrap';

const Chat = () => {
    const { state } = useLocation();
    return (<>
        <Row>
            <Col lg={4}>{ChatRoom.map((item) => (<ChatItem item={item} key={item.id} />))}</Col>
            <Col lg={8}>chat</Col>
        </Row>
    </>)
};

export default Chat;
