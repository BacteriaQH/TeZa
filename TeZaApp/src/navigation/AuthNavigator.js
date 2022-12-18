import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from '../screens/auth/StartScreen';
import LoginScreen from './../screens/auth/LoginScreen';
import OTPLoginScreen from '../screens/auth/OTPLoginScreen';
import PasswordLoginScreen from '../screens/auth/PasswordLoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const AuthStack = createNativeStackNavigator()
export default function AuthNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="Start">
            <AuthStack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="OTPLogin" component={OTPLoginScreen} />
            <AuthStack.Screen name="PasswordLogin" component={PasswordLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
        </AuthStack.Navigator >
    )
}