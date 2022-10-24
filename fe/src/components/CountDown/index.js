import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './index.css';

const CountdownTimer = ({ minutes, seconds }) => {
    const [remainingTime, setRemainingTime] = useState({
        minutes: minutes,
        seconds: seconds,
    });

    const updateRemainingTime = (time) => {
        const { minutes, seconds } = time;
        if (minutes === 0 && seconds === 0) {
            return;
        }
        if (seconds === 0) {
            setRemainingTime({
                minutes: minutes - 1,
                seconds: 59,
            });
        } else {
            setRemainingTime({
                minutes,
                seconds: seconds - 1,
            });
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(remainingTime);
        }, 1000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remainingTime]);

    const handleGetNewOtp = () => {
        console.log('get new otp');
        setRemainingTime({
            minutes: '2',
            seconds: '30',
        });
    };
    return (
        <>
            {remainingTime.seconds === 0 && remainingTime.minutes === 0 ? (
                <div className="countdown-expired">
                    <Button onClick={handleGetNewOtp}>Lấy mã mới</Button>
                </div>
            ) : (
                <div className="countdown-timer mb-2">
                    <div className="mx-1" style={{ color: '#000', fontSize: '1rem' }}>
                        Hết hạn sau:
                    </div>
                    <span>{remainingTime.minutes >= 10 ? remainingTime.minutes : '0' + remainingTime.minutes}</span>
                    <span>:</span>
                    <span>{remainingTime.seconds >= 10 ? remainingTime.seconds : '0' + remainingTime.seconds}</span>
                </div>
            )}
        </>
    );
};

export default CountdownTimer;
