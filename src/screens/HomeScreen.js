import React from "react";

import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Accueil</Text>
            <Button onPress={() => navigation.navigate('Details')} title="Aller aux Détails"/>
            <View style={{ height: 12 }}/>
            <Button title="Voir le Compteur" onPress={() => navigation.navigate('Counter')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center'},
    title: {fontSize: 22, fontWeight: 600},
})