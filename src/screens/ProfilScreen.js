import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { UsersContext } from '../context/UsersContext';

export default function ProfilScreen() {

    const {users} = useContext(UsersContext)
    const { user: currentUser } = useContext(CurrentUserContext);
    const displayName = currentUser ?? 'Utilisateur inconnu'

    const userInfos = users.get(currentUser);

    return (
        <View>
            <View style={styles.headerBackground}>
                <View style={styles.profilWrapper}>
                    <Image style={styles.profil} source={users.get(currentUser).profilePicturePath}/>
                </View>
            </View>

            <View style={styles.info1}>
                <Text style={styles.title}>{displayName}</Text>
                <Text>{userInfos.bio}</Text>
            </View>



            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>En voir plus</Text>
            </TouchableOpacity>

            <View style={styles.infoSection}>
                <Text>Email : </Text>
                <Text style={styles.text}>{userInfos.email}</Text>
                <Text>Date de naissance : </Text>
                <Text style={styles.text}>{userInfos.dayOfBith}</Text>
                <Text>Location : </Text>
                <Text style={styles.text}>Location: {userInfos.location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: "peachpuff"
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
      text: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        
    },
    infoSection: {
        marginTop: 30,
        marginLeft: 20

    },
    button: {
        marginTop: 50,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 5,
        width: 200,
        marginLeft: 120

        
    },
    buttonText: {
        textAlign: 'center'
    },
    headerBackground: {
        width: '100%',
        height: 180,
        backgroundColor: 'pink',
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilWrapper: {
        position: 'absolute',
        bottom: -60, // pour que la photo "dépasse" la demi-lune
        alignItems: 'center',
    },
    info1: {
        marginTop: 50,
        marginLeft: 20
    }

})