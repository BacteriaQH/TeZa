import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InforStep from '../../components/Step/InforStep';
import NameStep from '../../components/Step/NameStep';
import OtpStep from '../../components/Step/OtpStep';
import EmailStep from '../../components/Step/EmailStep';
import axios from 'axios';
import { BASE_URL } from '../../constant';
const Register = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        isMale: true,
        address: '',
    });
    const [error, setError] = useState({
        error: false,
        message: '',
        type: 0,
    });
    const handleName = (name) => {
        console.log('name', name);
        setName(name);

        return true;
    };
    const handleSendOtp = async (email) => {
        axios.post(`${BASE_URL}/api/generate/otp`, { email });
    };
    const handleGenerateOtp = async (email) => {
        setIsLoading(true);
        setEmail(email);
        const res = await axios.post(`${BASE_URL}/api/check/mail`, { email }).catch((err) => {
            if (err.response) {
                setIsLoading(false);
                return false;
            }
        });
        if (res.data) {
            setIsLoading(false);
            handleSendOtp(email);
            setError({
                error: true,
                message: res.data.message,
                type: 2,
            });
            return true;
        }
        return false;
    };

    const handleVerifyOtp = async (email, otp) => {
        console.log('email', email);
        console.log('otp', otp);
        const result = await axios.post(`${BASE_URL}/api/verify/otp`, { email, otp }).catch((err) => {
            if (err.response) {
                setIsLoading(false);
                setError({
                    error: true,
                    message: err.response.data.message,
                    type: 3,
                });
                return false;
            }
        });
        if (result.data) {
            setIsLoading(false);
            return true;
        }
        return true;
    };

    const handleSubmit = (name, email, password, dob, isMale, address) => {
        setForm({
            name: name,
            email: email,
            password: password,
            dob: dob,
            isMale: isMale,
            address: address,
        });
        axios.post(`${BASE_URL}/api/register`, form).then((res) => {
            navigate(`/login`);
        });
    };

    const steps = [
        <NameStep page={page} setPage={setPage} err={error} isLast={false} onNext={(name) => handleName(name)} />,
        <EmailStep
            page={page}
            setPage={setPage}
            error={error}
            isLast={false}
            onNext={(email) => handleGenerateOtp(email)}
        />,
        <OtpStep
            page={page}
            setPage={setPage}
            isLast={false}
            email={email}
            onNext={(email, otp) => handleVerifyOtp(email, otp)}
        />,
        <InforStep page={page} setPage={setPage} isLast={true} name={name} email={email} onSubmit={handleSubmit} />,
    ];
    return <>{steps[page]}</>;
};

export default Register;
