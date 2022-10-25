import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountDown';
import OtpBox from '../OtpBox';

const defaultFn = () => {};

const OtpStep = ({ page, setPage, isLast, email, sendOtp, onNext = defaultFn, onSubmit = defaultFn }) => {
    const [otp, setOtp] = useState('');
    const onOtpChange = (otp) => {
        setOtp(otp);
    };
    const handleOnNext = async () => {
        let result = await onNext(email, otp);
        if (result) {
            setPage(page + 1);
        }
    };
    return (
        <div className="align-items-center justify-content-center">
            <div className="mx-auto">
                Mã OTP của bạn đã được gửi đến email của bạn
                <span style={{ color: '#0d6efd' }}> {email}</span> . Vui lòng nhập mã để tiếp tục.
            </div>
            <OtpBox valueLength={6} otp={otp} onChange={onOtpChange} />
            <CountdownTimer minutes={2} seconds={30} email={email} sendOtp={sendOtp} />
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
            {!isLast ? (
                <Button className={'mt-3 mb-5 mx-5 ml-1'} onClick={handleOnNext}>
                    Tiếp
                </Button>
            ) : (
                <Button className={'mt-3 mb-5 mx-5'} onClick={() => onSubmit(email, otp)}>
                    Submit
                </Button>
            )}
        </div>
    );
};

export default OtpStep;
