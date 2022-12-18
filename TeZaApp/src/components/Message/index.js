import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Message({ message }) {

    const isMyMessage = () => {
        return message.user.id === "u1";
    };

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: isMyMessage() ? '#2196f3' : 'white',
                alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
            }
        ]}>
            <Text style={styles.message}>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: "80%",

        // Shadows
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 20,
        shadowRadius: 1.0,

        elevation: 1,
        opacity: 1
    },
    message: {
        fontSize: 16,
        backgroundColor: 'inherit'
    },
    time: {
        alignSelf: "flex-end",
        color: "#0f0f0f",
    },
})