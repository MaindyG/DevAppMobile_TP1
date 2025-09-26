import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    const {user} = useContext(CurrentUserContext);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bonjour {user} !</Text>    
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Info-Person')}>
                <Text style={styles.text}> Contacts </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Profil')}>
                <Text style={styles.text}> Profil </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.text}> Paramètres </Text>
            </TouchableOpacity>
            
            
            <View style={{ height: 12 }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#dda4a4ff"},
    title: {fontSize: 35, fontWeight: 600, color:"#fff"},
    btn: {
    backgroundColor: "#dc6375ff",
    color: "white",
    borderRadius: 50,
    marginTop: 50,
    padding: 10,
    width: 200,
    height: 50
  },
  btn1: {
    borderRadius: 50,
    marginTop: 50,
    padding: 10,
    backgroundColor: "#dc6375ff",
    width: 200,
    height: 50,
    color:"#fff"
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    fontSize:17,
    color:"#fff"
  }
})