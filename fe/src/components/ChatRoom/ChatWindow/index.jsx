import React, { useEffect, useState } from 'react';
import { Col, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faImage,
    faPaperPlane,
    faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import classNames from 'classnames/bind';

import styles from './index.css';

import Avatar from '../../Avatar';
import MessageItem from '../../Message/MessageItem';

import Chats from '../../../assets/dummy-data/message.json';
import PreLayout from '../../Layout/BGLayout';

const cx = classNames.bind(styles);

const ChatWindow = ({ mate, defaultChatmate }) => {
    const [message, setMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState('');
    const [chatmate, setChatmate] = useState({});
    const handlePickEmoji = (emojiObject, event) => {
        setMessage(message + emojiObject.emoji);
    };

    const handleSendMessage = () => {
        console.log(message);
    };

    useEffect(() => {
        const updatedChatmate = () => {
            mate.id ? setChatmate(mate) : setChatmate(defaultChatmate);
        };
        return updatedChatmate();
    }, [mate, defaultChatmate]);

    useEffect(() => {
        console.log('messageHistory', Chats.reverse());
        // setMessageHistory(Chats.reverse());
    }, []);

    const IconPopover = (
        <Popover>
            <Popover.Body>
                <EmojiPicker
                    searchDisabled
                    onEmojiClick={handlePickEmoji}
                    theme={Theme.AUTO}
                />
            </Popover.Body>
        </Popover>
    );

    return (
        <div>
            <Row>
                <Col
                    sm={3}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                    }}
                >
                    {chatmate.id && (
                        <>
                            <Avatar
                                name={chatmate.user.name}
                                image={chatmate.user.image}
                            />
                            <div className="mx-3" style={{}}>
                                {chatmate.user.name}
                            </div>
                        </>
                    )}
                </Col>
            </Row>
            <Row className={['mx-3', 'my-5', cx('chat')]}>
                {Chats.slice(0)
                    .reverse()
                    .map((messages) => (
                        <MessageItem mess={messages} key={messages.id} />
                    ))}
            </Row>
            <Row className="my-4">
                <Col
                    sm={1}
                    style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#f0f2f5',
                        borderRadius: '80px',
                    }}
                >
                    <label>
                        <FontAwesomeIcon
                            icon={faImage}
                            className="my-3 mx-2"
                            style={{ cursor: 'pointer' }}
                        />
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            style={{
                                opacity: 0,
                                zIndex: '-1',
                                position: 'absolute',
                            }}
                        />
                    </label>
                </Col>
                <Col sm={10}>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: '#f0f2f5',
                            borderRadius: '15px',
                            padding: '10px',
                        }}
                    >
                        <OverlayTrigger
                            trigger={'click'}
                            placement={'top'}
                            overlay={IconPopover}
                        >
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </OverlayTrigger>
                        <input
                            type={'text'}
                            style={{
                                backgroundColor: '#f0f2f5',
                                width: '97%',
                                paddingLeft: '20px',
                            }}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                </Col>
                <Col
                    sm={1}
                    style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#f0f2f5',
                        borderRadius: '80px',
                    }}
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="my-3 mx-2"
                        onClick={handleSendMessage}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ChatWindow;
