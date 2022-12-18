import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { GlobalContext } from './../../context/Provider';
import logoutUser from '../../context/actions/logoutUser';

export default function SettingScreen() {
    const [user, setUser] = useState({});
    const { authDispatch } = useContext(GlobalContext);
    const getItemFromStorage = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const user = await AsyncStorage.getItem('user');
            setUser(JSON.parse(user))
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getItemFromStorage()
        return () => getItemFromStorage()
    }, []);
    const AsyncAlert = async () => new Promise((resolve) => {
        Alert.alert(
            'Cofirm',
            'Are you sure to log out this account?',
            [
                {
                    text: 'Cancle',
                    onPress: () => { },
                },
                {
                    text: 'OK',
                    onPress: () => {
                        logoutUser()(authDispatch);
                    },
                },
            ],
            { cancelable: false },
        );
    });

    const handleLogout = async () => {
        await AsyncAlert();
    }


    return (
        <View style={styles.container}>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Address: {user.address}</Text>
            <Text>Agent: {JSON.stringify(user.agent)}</Text>

            <Button title='Log out' onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})