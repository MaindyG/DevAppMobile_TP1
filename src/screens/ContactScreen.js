import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { addUserToList } from "../hooks/addUser";

export default function ScrollImages() {
    let id = 0;

    const {users, addUser} = addUserToList([
        { id: id++, image: require('../assets/images/image1.jpg'), name: 'Alice' },
        { id: id++, image: require('../assets/images/image2.jpg'), name: 'John' },
        { id: id++, image: require('../assets/images/image3.jpg'), name: 'Alex' }
    ]);

    //Initialisation du state pour le TextInput
    const [name, setName] = useState('');

    //Fonction pour ajouter un utilisateur
    const add = () => {
        if (name.trim()) {
            addUser({
                name: name.trim(),
                image: require('../assets/images/image4.jpg')
            });
            setName('');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <>
            <View>
                <TextInput
                    placeholder="Nom"
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.input}
                />

                <TouchableOpacity onPress={add} style={styles.button}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 20 }}>Ajouter Élève</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9c2ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#f9c2ff',
        padding: 20,
        borderRadius: 8,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    button: {
        margin: 10,
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 5,
    }
});
