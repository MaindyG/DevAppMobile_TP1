import React from "react";
import { View, Text, StyleSheet } from 'react-native'; 

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Écran Détails</Text>
            <Text style={styles.title}>Voici un écran poussé via la navigation de type Stack.</Text>
        </View>
    )
}

 const styles = StyleSheet.create({ 
        container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }, 
        title: { fontSize: 22, fontWeight: '600', marginBottom: 8 }, 

}); 