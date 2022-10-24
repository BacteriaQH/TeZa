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

const Login = () => {
    // const navigate = useNavigate();

    const [qrCodeBase64, setQrCodeBase64] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState(0);
    const [otp, setOtp] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isExpired, setIsExpired] = useState(false);

    const [error, setError] = useState({
        error: false,
        message: 'Email or password is incorrect',
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/api/generate/qrcode`).then((res) => {
            setQrCodeBase64(res.data.qrcode);
        });
    }, []);
    setTimeout(() => {
        setIsExpired(true);
    }, 4000);
    const handleGetNewQRCode = () => {
        setIsLoading(true);

        //get new QR code from api
        console.log('get new qr');

        setTimeout(() => {
            console.log('time out');
            setIsLoading(false);
            setIsExpired(false);
        }, 3000);
    };

    const handleLoginWithPassword = () => {
        setIsLoading(true);
        const data = { email, password };
        setTimeout(() => {
            console.log(data);
            setIsLoading(false);
        }, 3000);
        console.log(data);
    };

    const handleGetEmailWithOtp = (email) => {
        console.log('email', email);
        setEmail(email);
        return true;
    };

    const handleLoginWithOtp = (email, otp) => {
        console.log('email', email);
        console.log('otp', otp);
        setOtp(otp);

        return true;
    };
    const steps = [
        <EmailStep page={page} setPage={setPage} isLast={false} onNext={(email) => handleGetEmailWithOtp(email)} />,
        <OtpStep
            page={page}
            setPage={setPage}
            isLast={true}
            email={email}
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
