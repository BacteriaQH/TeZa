import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Tabs, Tab, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import './index.css';

import OtpStep from '../../components/Step/OtpStep';
import EmailStep from '../../components/Step/EmailStep';
import Spiner from '../../components/Spinner';

import { BASE_URL } from '../../constant';

const Login = ({ socket }) => {
    const navigate = useNavigate();

    const [qrCodeBase64, setQrCodeBase64] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState(0);
    const [otp, setOtp] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isExpired, setIsExpired] = useState(false);

    const [error, setError] = useState({
        error: false,
        message: '',
        type: 0,
    });

    const getQR = () => {
        axios.get(`${BASE_URL}/api/generate/qrcode`).then((res) => {
            setQrCodeBase64(res.data.qrcode);
        });
    };
    useEffect(getQR, []);

    socket.on('expired', () => {
        setIsExpired(true);
    });

    const handleGetNewQRCode = () => {
        setIsLoading(true);
        getQR();
        setIsLoading(false);
        setIsExpired(false);
    };

    const handleLoginWithPassword = () => {
        setIsLoading(true);
        const data = { email, password };
        axios
            .post(`${BASE_URL}/api/login/password`, data)
            .then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);
                    //save data to local storage
                    localStorage.setItem('token', res.data.user.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    //navigate to chat page
                    navigate(`/chat/${res.data.user._id}`);
                }
            })
            .catch((err) => {
                if (err.response) {
                    setIsLoading(false);
                    setError({
                        error: true,
                        message: err.response.data.message,
                        type: 1,
                    });
                }
            });
    };
    const handleSendOtp = async (email) => {
        axios.post(`${BASE_URL}/api/generate/otp`, { email });
    };
    const handleGetEmailWithOtp = async (email) => {
        setIsLoading(true);
        setEmail(email);
        const res = await axios.post(`${BASE_URL}/api/check/mail`, { email }).catch((err) => {
            if (err.response) {
                handleSendOtp(email);
                setIsLoading(false);
                return true;
            }
        });
        if (res.data) {
            setIsLoading(false);
            setError({
                error: true,
                message: res.data.message,
                type: 2,
            });
            return false;
        }
        return true;
    };

    const handleLoginWithOtp = (email, otp) => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/api/login/otp`, { email, otp })
            .then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);
                    //save data to local storage
                    localStorage.setItem('token', res.data.user.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    //navigate to chat page
                    navigate(`/chat/${res.data.user._id}`);
                }
            })
            .catch((err) => {
                if (err.response) {
                    setIsLoading(false);
                    setError({
                        error: true,
                        message: err.response.data.message,
                        type: 3,
                    });
                }
            });

        return true;
    };
    const steps = [
        <EmailStep
            page={page}
            setPage={setPage}
            isLoading={isLoading}
            isLast={false}
            onNext={(email) => handleGetEmailWithOtp(email)}
            error={error}
        />,
        <OtpStep
            page={page}
            setPage={setPage}
            isLast={true}
            email={email}
            error={error}
            sendOtp={(email) => handleSendOtp(email)}
            onSubmit={(email, otp) => handleLoginWithOtp(email, otp)}
        />,
    ];

    return (
        <>
            <Tabs fill justify defaultActiveKey="qrcode" className="tabs-content">
                <Tab eventKey="qrcode" title="Với Mã QR">
                    <div className="qrcode">
                        <div className="mt-4">
                            <div className="qrcode__img">
                                {/* {qrCodeBase64 && qrCodeBase64} */}
                                <img src={qrCodeBase64} alt="qr-code" />
                            </div>
                            {isExpired && (
                                <div className="qrcode_expired p-3">
                                    <p>Mã QR hết hạn</p>
                                    <Button onClick={handleGetNewQRCode}>
                                        {isLoading ? <Spiner /> : 'Lấy mã mới'}
                                    </Button>
                                </div>
                            )}
                            <div className="mx-4 mt-3">Quét mã QR để đăng nhập</div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="email" title="Với Email">
                    <div className="input-box m-3 mt-5">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Form.Control
                            autoFocus
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box m-4">
                        <FontAwesomeIcon icon={faLock} />
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mx-auto">{error.error && <p className="text-danger">{error.message}</p>}</div>
                    {error.error && error.type === 1 && <div className="text-danger">{error.message}</div>}
                    <Button className="m-3 mb-5" onClick={handleLoginWithPassword}>
                        {isLoading ? <Spiner /> : 'Đăng nhập với mật khẩu'}
                    </Button>
                </Tab>
                <Tab eventKey="otp" title="Với OTP">
                    {steps[page]}
                    <br />
                </Tab>
            </Tabs>
            <div className="line my-3 align-self-center"></div>
            <p className="action-more">
                Bạn chưa có tài khoản?{' '}
                <Button as={Link} to={'/register'} className="mx-2">
                    Đăng ký ngay.
                </Button>
            </p>
        </>
    );
};

export default Login;
