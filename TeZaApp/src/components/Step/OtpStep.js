import { View, Text, Pressable, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function OtpStep({ page, setPage, isLast }) {
    return (
        <View style={styles.container}>
            <Text>OtpStep</Text>
            <Button onPress={() => setPage(page - 1)} disabled={page === 0} title='Trước' />
            <Button onPress={() => setPage(page + 1)} disabled={isLast} title='Tiếp' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})