import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native';

import Button from '../Button';
import Input from '../Input';
import axiosInstance from '../../helpers/axiosInstance';

export default function EmailStep({ page, setPage, isLast, getEmail, fromRegister }) {
    const [email, setEmail] = useState('');
    const [isChangeEmail, setIsChangeEmail] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: '',
        type: 0,
    });
    const handleChangeEmail = (text) => {
        setEmail(text);
        setIsChangeEmail(!isChangeEmail)
        getEmail(text);
    }
    /**
     * change disale status of button when email is changed. 
     * All after user's email is exits in register or not exit in login
     */
    useEffect(() => {
        if (isChangeEmail) {
            setError({
                error: false,
                message: '',
                type: 0,
            })
        }
    }, [isChangeEmail]);

    const handleSendOtp = async (email) => {
        axiosInstance.post(`/api/generate/otp`, { email });
    };
    const handleGetOtp = async () => {
        setIsLoading(true);
        const res = await axiosInstance.post(`/api/check/mail`, { email }).catch((err) => {
            if (err.response) {
                setIsLoading(false);
                if (fromRegister) {
                    setError({
                        error: true,
                        message: err.response.data.message,
                        type: err.response.code,
                    })
                } else {
                    handleSendOtp(email);
                    setError({
                        error: false,
                        message: '',
                        type: 0,
                    })
                    Alert.alert(
                        'Notification',
                        `OTP was sent to ${email}. Please check your email and type the OTP to continue.`
                    );
                    setPage(page + 1);
                }
            }
        });
        if (fromRegister) {
            if (res.data) {
                handleSendOtp(email);
            }
            setIsLoading(false);
        }

        Alert.alert(
            'Notification',
            `OTP was sent to ${email}. Please check your email and type the OTP to continue.`
        );
        setPage(page + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                <Text style={{ fontSize: 17 }}>Email: </Text>
                <Input placeholder={'Email'} value={email} onChangeText={handleChangeEmail} />
            </View >
            {
                isLoading && <ActivityIndicator size='large' color={'#007bff'} />
            }
            {error.error && <Text style={{ color: 'red' }}>{error.message}</Text>}
            <View style={styles.buttonContainer}>
                <Button onPress={() => setPage(page - 1)} title='Prev' disable={page === 0} />
                <Button onPress={() => handleGetOtp()} title='Next' disable={isLast || email === '' || isLoading || error.error} />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    emailContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})

const EmailText = ({ email }) => {
    return (
        <Text style={{ fontSize: 17, color: 'royaleblue' }}>{email} </Text>
    )
}