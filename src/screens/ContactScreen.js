import React, { useState, useContext } from "react";
import { FlatList, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { UsersContext } from "../context/UsersContext";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../assets/colorPalette";

export default function ContactScreen() {
    const { users } = useContext(UsersContext);
    const [name, setName] = useState('');

    const { theme } = useContext(ThemeContext);
    const colors = theme === "light" ? lightTheme : darkTheme;

    const styles = StyleSheet.create({
        item: {
            padding: 10,
            marginVertical: 5,
            backgroundColor: colors.secondary,
            flexDirection: 'row',
            alignItems: 'center',
        },
        input: {
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 20,
            borderRadius: 8,
            color: colors.text,
        },
        image: {
            width: 50,
            height: 50,
            marginRight: 10,
        },
        button: {
            margin: 10,
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: colors.text,
            textAlign: "center",
        },
        container: {
            backgroundColor: colors.background,
            flex: 1
        }
    });

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.profilePicturePath} style={styles.image} />
            <Text style={{ color: colors.text }}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{marginTop: 10}}>
                <TextInput
                    placeholder="Nom"
                    placeholderTextColor={colors.secondary}
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
            </View>

            <FlatList
                data={Array.from(users.values()).filter(e => e.name.startsWith(name.toLowerCase()))}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );
};
