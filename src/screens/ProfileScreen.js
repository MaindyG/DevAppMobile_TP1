import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import defaultProfile from "../assets/images/defaultPic.png";

export default function ProfileScreen() {

    const [name, setName] = useState('Default name');
    const [defaultPic, setDefaultPic] = useState(defaultProfile);

    const user = {
        name: name,
        image: defaultPic 
    }

    return (
        <View style={styles.container}>
            <Image style={styles.profil} source={user.image}/>
            <Text style={styles.title}>{user.name}</Text>
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