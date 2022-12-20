import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function ScanQRScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        setIsLoading(true);
        const [url, cipher] = data.split('?tk=');
        const userStr = await AsyncStorage.getItem('user');
        const user = JSON.parse(userStr);
        axios.post(url, { email: user.email, tk: cipher })
            .catch(e => console.log(e))
            .then((res) => {
                setIsLoading(false);
                navigation.navigate('Infor', { data: res.data });
            })
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
            {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            {scanned &&
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} disabled={isLoading} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
})
