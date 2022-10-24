import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const NameStep = ({ page, setPage, onNext, isLast }) => {
    const [name, setName] = useState('');
    return (
        <>
            <div className="m-3 mt-5">
                <Form.Label>
                    <FontAwesomeIcon className="mx-1" icon={faUser} />
                    Họ và tên
                </Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {
                <Button
                    className={`m-3 mb-5 mx-5 ${page === 0 && 'disabled'}`}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    Trước
                </Button>
            }
            {!isLast && (
                <Button
                    className={'m-3 mb-5 mx-5 ml-1'}
                    onClick={() => {
                        onNext(name) && setPage(page + 1);
                    }}
                >
                    Tiếp
                </Button>
            )}
        </>
    );
};

export default NameStep;
