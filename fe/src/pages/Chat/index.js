import React from 'react';
import { useLocation } from 'react-router-dom';
const Chat = () => {
    const { state } = useLocation();
    return <div>{JSON.stringify(state)}</div>;
};

export default Chat;
