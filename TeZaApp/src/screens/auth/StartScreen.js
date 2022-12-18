import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import Button from '../../components/Button';

import logo from '../../../assets/img/logo_c.png';
import { useEffect } from 'react';


export default function StartScreen() {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <LinearGradient
                    colors={['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']}
                    start={{ x: 0.8, y: 0.8 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.nameContainer}
                >
                    <Text style={[styles.name]}>TeZa</Text>
                </LinearGradient>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("Login")} title='Log in' />
                <Button onPress={() => navigation.navigate("Register")} title='Register' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        color: 'white'
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    nameContainer: {
        height: '50%'
    },
    name: {
        fontSize: 40,
        color: '#fff'
    },
    buttonContainer: {
        justifyContent: 'space-evenly',
    },
})