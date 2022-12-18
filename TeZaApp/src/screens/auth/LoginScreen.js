import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';


export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title='Login with OTP Code' onPress={() => navigation.navigate('OTPLogin')} />
            <Button title='Login with Password' onPress={() => navigation.navigate('PasswordLogin')} />
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