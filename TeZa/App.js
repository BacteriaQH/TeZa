import React from 'react';

import Scanner from './src/screens/Scanner';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Agent from './src/screens/Agent';

const Stack = createStackNavigator();
function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="Agent" component={Agent} />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
};
