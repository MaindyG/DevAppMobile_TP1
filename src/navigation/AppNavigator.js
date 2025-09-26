import React, { useContext, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
//icons : https://icons.expo.fyi/Index
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#dda4a4ff',
        },
        tabBarActiveTintColor: '#ffffff',
        backgroundColor: '#dda4a4ff',
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Profil: 'account-circle',
            Settings: 'cog',
            Counter: 'abacus',
            InfoPerson: 'contacts',
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" }, title: 'Accueil' }} />
      <Tab.Screen name="Counter" component={CounterScreen} options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" }, title: 'Compteur' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" }, title: 'Paramètre' }} />
      <Tab.Screen name="InfoPerson" component={ScrollImages} options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" }, title: "Liste De Contacts" }} />
      <Tab.Screen name="Profil" component={ProfilScreen} options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" }, title: 'Page profil', screen: "cog" }} />
    </Tab.Navigator>
  );

}
export default function AppNavigator() {
  const { user } = useContext(CurrentUserContext);

  return (
    <NavigationContainer>

      {(user == null) ?
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Connexion", headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" } }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Inscription", headerTintColor: "#fff", headerStyle: { backgroundColor: "#dc6375ff" } }} />
        </Stack.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
      }

    </NavigationContainer>
  );
}