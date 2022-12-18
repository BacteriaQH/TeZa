import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../Button';
import Countdown from '../Countdown';
import OtpBox from '../Otp';
import axiosInstance from '../../helpers/axiosInstance';
import loginUser from '../../context/actions/loginUser';
import { GlobalContext } from './../../context/Provider';



export default function OtpStep({ page, setPage, isLast, email, fromRegister }) {
    const [otpCode, setOtpCode] = useState('');
    const [isFullCode, setIsFullCode] = useState(false);
    const [isEstimated, setIsEstimated] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: '',
        type: 0,
    });


    const navigation = useNavigation();
    const codeLength = 6;
    const { authDispatch, authState: { err, loading } } = useContext(GlobalContext);
    const handleVeryfyOtp = async () => {
        if (fromRegister) {
            const result = await axiosInstance.post(`/api/verify/otp`, { email, otp: otpCode })
                .catch((err) => {
                    if (err.response) {
                        setIsLoading(false);
                        setError({
                            error: true,
                            message: err.response.data.message,
                            type: err.response.code,
                        });
                    }
                });
            if (result.data) {
                setIsLoading(false);
                navigation.navigate('Start');
            }
        } else {
            loginUser(2, email, otpCode)(authDispatch);
        }

    }
    const handleResendOtp = () => {
        setIsLoading(true);
        axiosInstance.post(`/api/generate/otp`, { email });
        Alert.alert(
            'Notification',
            `OTP was sent to ${email}. Please check your email and type the OTP to continue.`
        );
        setIsLoading(false);
        setIsEstimated(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Type your otp</Text>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <OtpBox
                    code={otpCode}
                    setCode={setOtpCode}
                    setIsFullCode={setIsFullCode}
                    length={codeLength}
                />
            </TouchableWithoutFeedback>
            {isEstimated ? <Button title={'Resend'} onPress={handleResendOtp} /> : <Countdown handleSetIsEstimated={setIsEstimated} />}
            {
                isLoading && <ActivityIndicator size='large' color={'#007bff'} />
            }
            {error.error && <Text style={{ color: 'red' }}>{error.message}</Text>}
            <View style={styles.buttonContainer}>
                <Button onPress={() => setPage(page - 1)} title='Prev' disable={page === 0} />
                <Button onPress={() => handleVeryfyOtp()} title={loading ? 'Loading' : 'Next'} disable={isLast || !isFullCode || isLoading || error.error} />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})