import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Button({ onPress, title, disable }) {
    return (
        <Pressable style={[styles.button, disable === true && styles.diableButton]} onPress={onPress} disabled={disable}>
            <Text style={{ color: '#fff', fontSize: 20, }}> {title}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        textAlign: 'center',

        margin: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,

        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'royalblue',
        backgroundColor: 'royalblue',
    },
    diableButton: {
        color: '#fff',
        backgroundColor: '#6c757d',
        borderColor: '#6c757d'
    }
})