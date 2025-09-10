import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CounterScreen from "../screens/CounterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScrollImages from "../screens/ScrollImages";

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
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false}}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}