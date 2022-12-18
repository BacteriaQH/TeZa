import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import NameStep from '../../components/Steps/NameStep';
import EmailStep from '../../components/Steps/EmailStep';
import OtpStep from '../../components/Steps/OtpStep';
import InforStep from '../../components/Steps/InforStep';

export default function RegisterScreen() {
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const step = [
        <NameStep page={page} setPage={setPage} isLast={false} getName={setName} />,
        <EmailStep page={page} setPage={setPage} isLast={false} getEmail={setEmail} fromRegister={true} />,
        <OtpStep page={page} setPage={setPage} isLast={false} email={email} />,
        <InforStep page={page} setPage={setPage} isLast={true} email={email} name={name} />,
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})