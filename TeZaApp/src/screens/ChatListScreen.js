import React from 'react'
import { StyleSheet, FlatList } from 'react-native'



import ChatListItem from '../components/ChatListItem';

import chats from '../../assets/dummy-data/chats.json'


const ChatListScreen = () => {
    return (

        <FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} />} />
    )
}

export default ChatListScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})