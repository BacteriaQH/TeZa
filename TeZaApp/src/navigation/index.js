import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import MainTabNavigator from './MainTabNavigator';

import ChatScreen from '../screens/ChatScreen';
import ChatListScreen from './../screens/ChatListScreen';
import ScanQRScreen from './../screens/ScanQRScreen';
import RegisterScreen from './../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator()

const Navigator = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignIn ?
                    (
                        <>
                            <Stack.Screen name='Main' component={MainTabNavigator} options={{ headerShown: false }} />
                            <Stack.Screen name='ChatList' component={ChatListScreen} />
                            <Stack.Screen name='Chat' component={ChatScreen} />
                            <Stack.Screen name='ScanQR' component={ScanQRScreen} />
                        </>
                    ) :
                    (
                        <>
                            <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                            <Stack.Screen name='LogIn' component={LoginScreen} options={{ headerShown: false }} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigator;

