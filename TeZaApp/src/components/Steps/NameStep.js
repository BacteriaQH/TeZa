import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'


import Button from '../Button';
import Input from '../Input';
export default function NameStep({ page, setPage, isLast, getName }) {
    const [name, setName] = useState('');
    const handleGetName = (text) => {
        setName(text);
        getName(text);
    }
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={{ fontSize: 17 }}>Your name is:</Text>
                <Input placeholder={'Name'} value={name} onChangeText={handleGetName} />
            </View >
            <View style={styles.buttonContainer}>
                <Button onPress={() => setPage(page - 1)} title='Prev' disable={page === 0} />
                <Button onPress={() => setPage(page + 1)} title='Next' disable={isLast || name === ''} />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20,
        margin: 20
    },
    text: {
        fontSize: 20
    },
    nameContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },

    buttonContainer: {
        flexDirection: 'row',
    }
})