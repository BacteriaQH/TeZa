import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import NotImplementScreen from "../screens/NotImplementScreen";
import ChatsScreen from "../screens/chat/ChatsScreen";

import Header from './../layout/Header';
import SettingScreen from "../screens/setting/SettingScreen";


const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chats"
                component={ChatsScreen}
                options={{
                    header: () => <Header />,
                    tabBarIcon: () => <Icon name="ios-chatbox-ellipses" />
                }} />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: () => <Icon name="md-settings" />
                }} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;


const Icon = ({ name }) => {
    return (
        <Ionicons name={name} size={24} color="black" />
    )
}