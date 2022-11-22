import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useNavigation } from '@react-navigation/native'

import { Text, View, Image, StyleSheet, Pressable } from 'react-native'

dayjs.extend(relativeTime)

const ChatListItem = ({ chat }) => {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })}>
            <View style={styles.container}>
                <Image source={{ uri: chat.user.image }} style={styles.image} />
                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                        <Text style={styles.time}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
                    </View>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
                        {chat.lastMessage.text}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ChatListItem


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        flex: 1,
        fontSize: 20
    },
    time: {
        color: "grey",
    },
    text: {
        color: "grey",
        width: '70%'
    },
})