
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { GlobalContext } from './../context/Provider';


const Navigator = () => {
    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <HomeNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    );
};

export default Navigator;