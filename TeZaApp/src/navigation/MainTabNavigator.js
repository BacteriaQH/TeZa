import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../components/Contact";
import Header from "../components/Header";
import ChatListScreen from "../screens/ChatListScreen";
import NotImplementedScreen from "../screens/NotImplementedScreen";

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarStyle: { backgroundColor: "whitesmoke" },
                // headerStyle: {
                //     display: "flex",
                //     padding: 0,
                //     margin: 0,
                // },
            }}>
            <Tab.Screen
                name='Chats'
                component={ChatListScreen}
                options={{
                    tabBarIcon: () => (<Icon name='chatbox-ellipses-outline' />),
                    header: () => <Header />
                }}
            />

            <Tab.Screen name='Call' component={Contact} options={{ tabBarIcon: () => (<Icon name='call-outline' />) }} />
            <Tab.Screen name='Setting' component={NotImplementedScreen} options={{ tabBarIcon: () => (<Icon name='settings-outline' />) }} />
        </Tab.Navigator>
    )
}
export default MainTabNavigator;

const Icon = ({ name }) => (
    <Ionicons name={name} size={24} color={'black'} />
)