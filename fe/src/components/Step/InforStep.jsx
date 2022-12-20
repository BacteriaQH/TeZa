import { faCalendar, faImage, faLocationDot, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import axios from 'axios';
import { BASE_URL } from '../../constant';
const defaultFn = () => {};
const InforStep = ({ page, setPage, isLast, name, email, onNext, onSubmit = defaultFn }) => {
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');

    const [isShowPassword, setIsShowPassword] = useState(false);

    const [dob, setDob] = useState('');
    const [isMale, setIsMale] = useState(1);
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [notify, setNotify] = useState({
        err: false,
        success: false,
        message: '',
    });

    const onVerifyPassword = () => {
        if (password !== '' && passwordRetype !== '' && password !== passwordRetype) {
            setNotify({
                err: true,
                success: false,
                message: 'Mật khẩu không khớp',
            });
        } else if (password !== '' && passwordRetype !== '') {
            setNotify({
                err: false,
                success: true,
                message: 'Mật khẩu khớp',
            });
        }
    };

    const handleImageUpload = async (file) => {
        const fileU = file.target.files[0];
        if (fileU) {
            axios
                .get(`${BASE_URL}/api/file/upload`, {
                    params: { fileName: fileU.name, fileType: fileU.type },
                })
                .then((res) => {
                    if (res.data.code === 200) {
                        const url = res.data.data.url;
                        axios
                            .put(res.data.data.signedRequest, fileU, {
                                headers: {
                                    'Content-Type': fileU.type,
                                },
                                crossdomain: true,
                            })
                            .then((res) => {
                                if (res.status === 200) {
                                    console.log(url);
                                    setImage(url);
                                }
                            });
                    }
                });
        }
    };

    const handleDeleteImage = () => {
        const key = image.split('/')[4];
        if (key) {
            axios
                .get(`${BASE_URL}/api/file/delete`, {
                    params: { key },
                })
                .then((res) => {
                    if (res.data.code === 200) {
                        console.log('delete success');
                        setImage('');
                    }
                });
        }
    };
    return (
        <>
            <div className="m-3 mt-5">
                <Form.Label>
                    <FontAwesomeIcon className="mx-1" icon={faCalendar} size={'lg'} />
                    Ngày Sinh
                </Form.Label>
                <Form.Control type="date" onChange={(e) => setDob(e.target.value)} />
                <Row>
                    <Col>
                        <div className="input-box mt-3">
                            <Form.Label>
                                <FontAwesomeIcon className="mx-1" icon={faLock} />
                                Mật khẩu
                            </Form.Label>
                            <Form.Control
                                required
                                type={isShowPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Mật khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={onVerifyPassword}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="input-box mt-3">
                            <Form.Label>
                                <FontAwesomeIcon className="mx-1" icon={faLock} />
                                Nhập lại Mật khẩu
                            </Form.Label>
                            <Form.Control
                                required
                                type={isShowPassword ? 'text' : 'password'}
                                name="re-password"
                                placeholder="Nhập lại mật khẩu"
                                onChange={(e) => setPasswordRetype(e.target.value)}
                                onBlur={onVerifyPassword}
                            />
                        </div>
                    </Col>
                </Row>
                <Form.Check
                    type="checkbox"
                    label="Hiển thị mật khẩu"
                    className="my-2"
                    defaultChecked={isShowPassword}
                    onChange={() => setIsShowPassword(!isShowPassword)}
                />
                <Row className="my-3">
                    <Col>
                        <Form.Label className="mx-2">Giới tính</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Nam"
                            name="gender"
                            checked={isMale}
                            onChange={() => setIsMale(1)}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Nữ"
                            name="gender"
                            checked={!isMale}
                            onChange={() => setIsMale(0)}
                        />
                    </Col>
                </Row>
                <Form.Label>
                    <FontAwesomeIcon icon={faLocationDot} /> Địa chỉ
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Địa chỉ"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Label className="my-3">
                    <label>
                        Chọn ảnh:
                        <FontAwesomeIcon icon={faImage} className=" mx-2" style={{ cursor: 'pointer' }} />
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            style={{
                                opacity: 0,
                                zIndex: '-1',
                                position: 'absolute',
                            }}
                            onChange={handleImageUpload}
                        />
                    </label>
                </Form.Label>
                {image && (
                    <>
                        <img src={image} alt="avatar" className="avatar" style={{ height: 80, width: '60%' }} />
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{ cursor: 'pointer', position: 'absolute' }}
                            onClick={handleDeleteImage}
                        />
                    </>
                )}
            </div>
            {notify.message && <p className={notify.err ? 'text-danger' : 'text-success'}>{notify.message}</p>}
            {
                <Button
                    className={`m-3 mx-5 ${page === 0 && 'disabled'}`}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    Trước
                </Button>
            }
            {!isLast ? (
                <Button
                    className={'m-3 mb-5 mx-5 ml-1'}
                    onClick={() => {
                        onNext() && setPage(page + 1);
                    }}
                >
                    Tiếp
                </Button>
            ) : (
                <Button
                    className={'m-3 mx-5 ml-1'}
                    onClick={() => {
                        onSubmit(name, email, password, dob, isMale, address);
                    }}
                >
                    Submit
                </Button>
            )}
        </>
    );
};

export default InforStep;
