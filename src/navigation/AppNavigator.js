import React, { useContext, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CounterScreen from "../screens/CounterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScrollImages from "../screens/ContactScreen";
import LoginScreen from "../screens/LoginScreen";
import { UsersContext } from "../context/UsersContext";
import { CurrentUserContext } from "../context/CurrentUserContext";
import RegisterScreen from "../screens/RegisterScreen";
import ProfilScreen from "../screens/ProfilScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil'}}/>
            <Tab.Screen name="Counter" component={CounterScreen} options={{title: 'Compteur'}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'Paramètre'}}/>
            <Tab.Screen name="Info-Person" component={ScrollImages} options={{title: "Liste d'élèves"}}/>
            <Tab.Screen name="Profil" component={ProfilScreen} options={{title: 'Page profil'}}/>
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