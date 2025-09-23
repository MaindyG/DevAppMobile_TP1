import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    const {user} = useContext(CurrentUserContext);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bonjour {user} !</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.text}>Aller aux Détails</Text>
            </TouchableOpacity>
            <View style={{ height: 12 }}/>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Counter')}>
                <Text style={styles.text}>Voir le Compteur</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center'},
    title: {fontSize: 22, fontWeight: 600},
                btn: {
    backgroundColor: "pink",
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
    backgroundColor: "#FFB6C1",
    width: 200,
    height: 50
  },
  text: {
    textAlign: "center",
    marginTop: 5
  }
})