import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, FlatList, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import InputBox from '../../components/InputBox';
import Message from '../../components/Message';

import background from '../../../assets/img/background.png';


import messages from '../../../assets/data/message.json';


export default function ChatScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params])
    return (
        <View style={styles.background}>
            <ImageBackground source={background} resizeMode='cover'>
                <LinearGradient
                    colors={['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <FlatList
                        data={messages}
                        renderItem={({ item }) => <Message message={item} />}
                        inverted={true} />
                </LinearGradient >
            </ImageBackground>
            <InputBox />
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.5
    }
})