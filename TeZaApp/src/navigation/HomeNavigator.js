import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import ChatsScreen from '../screens/chat/ChatsScreen';
import ChatScreen from '../screens/chat/ChatScreen';

import ScanQRScreen from '../screens/qr/ScanQRScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import InformationScreen from './../screens/qr/InformationScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <HomeStack.Navigator initialRouteName='Main'>
            <HomeStack.Screen
                name="Main"
                component={MainTabNavigator}
                options={{
                    headerShown: false
                }} />
            <HomeStack.Screen name="Chats" component={ChatsScreen} />
            <HomeStack.Screen name="Chat" component={ChatScreen} />
            <HomeStack.Screen name="ScanQR" component={ScanQRScreen} />
            <HomeStack.Screen name="Setting" component={SettingScreen} />
            <HomeStack.Screen name="Infor" component={InformationScreen} />
        </HomeStack.Navigator>
    )
}