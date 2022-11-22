import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

import Message from '../components/Message'
import InputBox from '../components/InputBox'

import background from '../../assets/img/background.jpg'

import messages from '../../assets/dummy-data/message.json'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const insets = useSafeAreaInsets()


    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
            style={{ flex: 1 }}
        >
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
        </KeyboardAvoidingView>
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