import React, { useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    const inputRef = useRef()
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="black" style={styles.search} onPress={() => inputRef.current.focus()} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <TextInput placeholder='Search' style={styles.input} ref={inputRef} />
            </TouchableWithoutFeedback>
            <MaterialCommunityIcons
                name="qrcode-scan"
                size={24} color="black"
                style={styles.qrcode}
                onPress={() => navigation.navigate('ScanQR')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 10
    },
    search: {
        alignSelf: 'flex-start',
        paddingRight: 20
    },
    input: {
        width: '80%'
    },
    qrcode: {
        alignSelf: 'flex-end'
    }
});