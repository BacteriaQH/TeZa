import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/img/c_logo.png'
const MainScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate('Register')
    }
    const handleLogin = () => {
        navigation.navigate('LogIn')
    }
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.text}>
                Đăng nhập hoặc đăng ký để sử dụng ứng dụng
            </Text>
            <Button onPress={handleRegister} title='Register' style={styles.button} />
            <Button onPress={handleLogin} title='Login' style={styles.button} />
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        fontSize: 20,
    },
    button: {
        margin: 20,
    }
})