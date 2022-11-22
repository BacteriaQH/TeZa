import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import EmailStep from '../components/Step/EmailStep';
import NameStep from '../components/Step/NameStep';
import OtpStep from '../components/Step/OtpStep';
import InforStep from '../components/Step/InforStep';

import logo from '../../assets/img/c_logo.png'
export default function RegisterScreen() {
    const [page, setPage] = useState(0)
    const [error, setError] = useState('')
    const [name, setName] = useState(false)


    const handleName = (name) => {
        setName(name)
    }


    const steps = [
        <NameStep
            page={page}
            setPage={setPage}
            err={error}
            isLast={false}
            onNext={(name) => handleName(name)}
        />,
        <EmailStep
            page={page}
            setPage={setPage}
            error={error}
            isLast={false}
        // onNext={(email) => handleGenerateOtp(email)}
        />,
        <OtpStep
            page={page}
            setPage={setPage}
            isLast={false}
        // email={email}
        // onNext={(email, otp) => handleVerifyOtp(email, otp)}
        />,
        <InforStep
            page={page}
            setPage={setPage}
            isLast={true}
        //  name={name} email={email} onSubmit={handleSubmit} 
        />,
    ];
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            {steps[page]}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 50,
        width: 100,
        height: 100,
    }
})