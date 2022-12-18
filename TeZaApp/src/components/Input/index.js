import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ placeholder, value, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: '#007bff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10
    }
})