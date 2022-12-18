import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native-safe-area-context';


export default function InputBox() {
    const [message, setMessage] = useState('')
    const handleSendMessage = () => {
        console.warn('Sending: ', message)
        setMessage('')
    }
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <MaterialIcons name='image' size={24} color='royaleblue' />
            <TextInput style={styles.input}
                value={message}
                onChangeText={setMessage}
                multiline
            />
            <MaterialIcons name='send' style={styles.send} size={24} color='white' onPress={handleSendMessage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
    },
    input: {
        flex: 1,
        fontSize: 18,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
        backgroundColor: '#fff'
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },
});