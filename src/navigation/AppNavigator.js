import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScrollImages from "../screens/ContactScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfilScreen from "../screens/ProfilScreen";
import ProfilDetailsScreen from "../screens/ProfilDetailsScreen";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../assets/colorPalette"; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: "#ffffffff",                
        tabBarInactiveTintColor: "#0000000",        
        headerTintColor: colors.text,                       
        headerStyle: { backgroundColor: colors.primary }, 
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: "home",
            Profil: "account-circle",
            Settings: "cog",
            Counter: "abacus",
            InfoPerson: "contacts",
          };
          return <MaterialCommunityIcons name={icons[route.name]} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Paramètres" }} />
      <Tab.Screen name="InfoPerson" component={ScrollImages} options={{ title: "Liste De Contacts" }} />
      <Tab.Screen name="Profil" component={ProfilScreen} options={{ title: "Page profil" }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useContext(CurrentUserContext);
  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <NavigationContainer theme={theme === "light" ? DefaultTheme : DarkTheme}>
      {user == null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Connexion",
              headerTintColor: colors.text,
              headerStyle: { backgroundColor: colors.primary },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "Inscription",
              headerTintColor: colors.text,
              headerStyle: { backgroundColor: colors.primary },
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="ProfilDetails"
            component={ProfilDetailsScreen}
            options={{
              title: "Informations Profil",
              headerTintColor: colors.text,
              headerStyle: { backgroundColor: colors.primary },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
