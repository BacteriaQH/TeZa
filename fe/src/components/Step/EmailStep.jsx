import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Spiner from '../Spinner';

const defaultFn = () => {};

const EmailStep = ({ page, setPage, error, isLast, isLoading, onNext = defaultFn }) => {
    const [email, setEmail] = useState('');
    const [isLoadingCpn, setIsLoadingCpn] = useState(isLoading);
    const handleOnClick = async () => {
        setIsLoadingCpn(true);
        let result = await onNext(email);
        if (result) {
            setPage(page + 1);
        }
        setIsLoadingCpn(false);
    };
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
            {isLoadingCpn && <Spiner />}
            {error.error && error.type === 2 && <p className="text-danger">{error.message}</p>}
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
                <Button className={'m-3 mb-5 mx-5 ml-1'} onClick={handleOnClick} disabled={!email}>
                    {'Tiếp'}
                </Button>
            )}
        </>
    );
};

export default EmailStep;
