import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

import Message from '../components/Message'
import InputBox from '../components/InputBox'

import background from '../../assets/img/background.jpg'

import messages from '../../assets/dummy-data/message.json'

const ChatScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()


    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    return (
        <ImageBackground source={background} style={styles.background}>
            <LinearGradient
                colors={['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']}
                start={{ x: 0.8, y: 0.8 }}
                end={{ x: 0, y: 0 }}
            >
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={{}}
                    inverted />
                <InputBox />
            </LinearGradient>
        </ImageBackground>
    )
}

export default ChatScreen


const styles = StyleSheet.create({
    background: {
        // flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.7
    }
})