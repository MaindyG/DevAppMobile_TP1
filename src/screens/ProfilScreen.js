import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { UsersContext } from '../context/UsersContext';

export default function ProfilScreen() {

    const {users} = useContext(UsersContext)
    const { user: currentUser } = useContext(CurrentUserContext);
    const displayName = currentUser ?? 'Utilisateur inconnu'

    return (
        <View style={styles.container}>
            <Image style={styles.profil} source={users.get(currentUser).profilePicturePath}/>
            <Text style={styles.title}>{displayName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
    title: {  
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,ntSize: 22, fontWeight: 600
    },
    profil: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },

})