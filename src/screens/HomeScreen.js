import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    const {user} = useContext(CurrentUserContext);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bonjour {user} !</Text>
            <TouchableOpacity style={styles.btn}>
                <Button onPress={() => navigation.navigate('Details')} title="Aller aux Détails"/>
            </TouchableOpacity>
            <View style={{ height: 12 }}/>
            <TouchableOpacity style={styles.btn}>
                <Button title="Voir le Compteur" onPress={() => navigation.navigate('Counter')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center'},
    title: {fontSize: 22, fontWeight: 600},
    btn: {backgroundColor: "pink", color: "white", borderRadius: 50, marginTop: 50, padding: 10}
})