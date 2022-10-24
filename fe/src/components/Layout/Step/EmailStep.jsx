import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const defaultFn = () => {};

const EmailStep = ({ page, setPage, isLast, onNext = defaultFn }) => {
    const [email, setEmail] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className="input-box m-3 mt-5">
                <Form.Label>
                    <FontAwesomeIcon className="mx-1" icon={faEnvelope} />
                    Email
                </Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
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
                        onNext(email) && setPage(page + 1);
                    }}
                >
                    Tiếp
                </Button>
            )}
        </>
    );
};

export default EmailStep;
