import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { UsersContext } from '../context/UsersContext';

export default function ProfilScreen() {

    const { users } = useContext(UsersContext)
    const { user: currentUser } = useContext(CurrentUserContext);
    const displayName = currentUser ?? 'Utilisateur inconnu'
    const { setCurrentUser } = useContext(CurrentUserContext);
    const handleLogout = () => {
        Alert.alert('Déconnexion', 'Vous êtes sur le point de vous deconnecter', [
            {
                text: 'Confirmer',
                onPress: () => setCurrentUser(null),
                style: '',
            },
            { text: 'Annuler', onPress: () => console.log('Deconnexion annulée') },
        ]);
    }
    return (
        <View style={styles.container}>
            <Image style={styles.profil} source={users.get(currentUser).profilePicturePath} />
            <Text style={styles.title}>{displayName}</Text>
           
            <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                <Text style={styles.text}>Déconnexion</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: "#dda4a4ff"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15, ntSize: 22, fontWeight: 600
    },
    profil: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    btn: {
        backgroundColor: "#ff0000ff",
        color: "white",
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 30,
        padding: 10,
        width: 200,
        height: 50
    },
    text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    color: "#fff"
  }
})