import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NotImplementScreen() {
    return (
        <View style={styles.container}>
            <Text>NotImplementScreen</Text>
            <Text>404</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center'
    }
})