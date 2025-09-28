import React, { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { ThemeContext } from "../context/ThemeContext";   
import { lightTheme, darkTheme } from "../assets/colorPalette"; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const { user } = useContext(CurrentUserContext);

  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? lightTheme : darkTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background, 
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      color: colors.text, 
    },
    btn: {
      backgroundColor: colors.primary,
      borderRadius: 50,
      marginTop: 20,
      padding: 10,
      width: 200,
      height: 50,
      justifyContent: "center",
    },
    btn1: {
      borderRadius: 50,
      marginTop: 20,
      padding: 10,
      backgroundColor: colors.secondary, 
      width: 200,
      height: 50,
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
      fontSize: 16,
      color: colors.text, 
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour {user} !</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Profil")}>
        <Text style={styles.text}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("InfoPerson")}>
        <Text style={styles.text}>Contacts</Text>
      </TouchableOpacity>
    </View>
  );
}
