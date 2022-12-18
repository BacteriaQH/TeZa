import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import EmailStep from '../../components/Steps/EmailStep';
import OtpStep from '../../components/Steps/OtpStep';

export default function OTPLoginScreen() {
    const [page, setPage] = useState(0);
    const [email, setEmail] = useState('');
    const step = [
        <EmailStep page={page} setPage={setPage} isLast={false} getEmail={setEmail} />,
        <OtpStep page={page} setPage={setPage} isLast={false} email={email} />,
    ]
    return (
        <View style={styles.container}>
            {step[page]}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})