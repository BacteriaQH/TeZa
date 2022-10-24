import React, { useMemo } from 'react';
import './index.css';
const OtpBox = ({ valueLength, onChange, otp }) => {
    const otpItems = useMemo(() => {
        const otpArr = otp.split('');
        const items = [];
        for (let i = 0; i < valueLength; i++) {
            if (isNaN(otpArr[i])) {
                items.push('');
            } else {
                items.push(otpArr[i]);
            }
        }
        return items;
    }, [otp, valueLength]);

    const handleInputChange = (e, index) => {
        let targetValue = e.target.value;

        const isDigit = /^\d+$/.test(targetValue);

        if (!isDigit && targetValue !== '') {
            return;
        }

        targetValue = isDigit ? targetValue : ' ';

        const newOtp = otp.substring(0, index) + targetValue + otp.substring(index + 1);

        onChange(newOtp);
        if (!isDigit) {
            return;
        }

        //focus on next input
        if (e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    };
    const handleOnKeyDown = (e) => {
        const target = e.target;
        if (e.key !== 'Backspace' || target.value !== ' ') {
            return;
        }
        if (target.previousElementSibling) {
            target.previousElementSibling.focus();
        }
    };

    return (
        <div className="otp-group my-5">
            {otpItems.map((digit, index) => {
                return (
                    <input
                        key={index}
                        autoFocus={index === 0}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="\d{1}"
                        maxLength={valueLength}
                        className="otp-input"
                        value={digit}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={handleOnKeyDown}
                        // onFocus={handleFocus}
                    />
                );
            })}
        </div>
    );
};

export default OtpBox;
