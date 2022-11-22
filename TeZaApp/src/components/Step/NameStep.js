import { View, Text, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

export default function NameStep({ page, setPage, err, isLast, onNext }) {
    const [name, setName] = useState('')
    return (
        <View style={styles.container}>
            <Text>NameStep</Text>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <TextInput multiline />
            </TouchableWithoutFeedback>
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
    },
    input: {
        height: 500,
        width: 100,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        backgroundColor: 'blue'
    }
})