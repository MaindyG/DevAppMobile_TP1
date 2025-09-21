import React, { useContext, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CounterScreen from "../screens/CounterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScrollImages from "../screens/ScrollImages";
import LoginScreen from "../screens/LoginScreen";
import { UsersContext } from "../context/UsersContext";
import { CurrentUserContext } from "../context/CurrentUserContext";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil'}}/>
            <Tab.Screen name="Counter" component={CounterScreen} options={{title: 'Compteur'}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'Paramètre'}}/>
            <Tab.Screen name="Info-Person" component={ScrollImages} options={{title: 'FlatList'}}/>
        </Tab.Navigator>
    );

}
export default function AppNavigator(){
    const {user} = useContext(CurrentUserContext);

    return(
        <NavigationContainer>

            {(user == null) ?
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false}}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                
            </Stack.Navigator>
            }

        </NavigationContainer>
    );
}