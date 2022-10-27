import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import { EMAIL, SERVER_URL } from '../constants/app';

const Scanner = () => {
    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [agent, setAgent] = useState({
        browser: {},
        os: {},
        sID: '',
    });
    const [tk, setTk] = useState('');
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        let c = data.split('tk=')[1];

        let result = await axios.post(`${SERVER_URL}/api/verify/qrcode`, { tk: c, email: EMAIL }).catch((err) => {
            alert(err);
        });
        if (result) {
            console.log(result.data);
            setAgent({
                browser: result.data.userAgent.browser,
                os: result.data.userAgent.os,
                sID: result.data.sID,
            });
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button
                    title={'Nhấn để tiếp tục'}
                    onPress={() =>
                        navigation.navigate('Agent', { browser: agent.browser, os: agent.os, sID: agent.sID })
                    }
                />
            )}
        </View>
    );
};

export default Scanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
