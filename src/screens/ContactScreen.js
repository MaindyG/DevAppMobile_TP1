import React, { useState, useContext } from "react";
import { FlatList, View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { UsersContext } from "../context/UsersContext";

export default function ContactScreen() {
    const { users } = useContext(UsersContext);
    const [name, setName] = useState('');
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={item.profilePicturePath}
                style={styles.image}
            />
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder="🔎  "
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.input}
                />

            </View>

            <FlatList
                data={Array.from(users.values()).filter(e => e.name.startsWith(name))}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: "#dd9393ff" },
    item: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#dda4a4ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        margin: 10,
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
    },

});
