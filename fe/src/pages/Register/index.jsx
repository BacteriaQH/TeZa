import React, { useState } from 'react';

import InforStep from '../../components/Step/InforStep';
import NameStep from '../../components/Step/NameStep';
import OtpStep from '../../components/Step/OtpStep';
import EmailStep from '../../components/Step/EmailStep';
const Register = () => {
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        isMale: true,
        address: '',
    });

    const handleName = (name) => {
        console.log('name', name);
        setName(name);

        return true;
    };

    const handleGenerateOtp = (email) => {
        console.log('email', email);

        setEmail(email);

        return true;
    };

    const handleVerifyOtp = (email, otp) => {
        console.log('email', email);
        console.log('otp', otp);

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
        console.log('form', form);
    };

    const steps = [
        <NameStep page={page} setPage={setPage} isLast={false} onNext={(name) => handleName(name)} />,
        <EmailStep page={page} setPage={setPage} isLast={false} onNext={(email) => handleGenerateOtp(email)} />,
        <OtpStep
            page={page}
            setPage={setPage}
            isLast={false}
            email={email}
            onNext={(email, otp) => handleVerifyOtp(email, otp)}
        />,
        <InforStep
            page={page}
            setPage={setPage}
            isLast={true}
            name={name}
            email={email}
            onSubmit={(name, email, password, dob, isMale, address) =>
                handleSubmit(name, email, password, dob, isMale, address)
            }
        />,
    ];
    return <>{steps[page]}</>;
};

export default Register;
