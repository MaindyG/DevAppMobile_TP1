
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert } from 'react-native';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { ThemeContext } from '../context/ThemeContext';

import { changeScreenOrientation } from '../hooks/orientation';



export default function SettingsScreen({ navigation }) {

    const [lock, toggleLock] = useState(true)



    const { theme, toggleTheme } = useContext(ThemeContext);


    const toggleLockAndOrientation = () => {
        toggleLock(previous => !previous);
        changeScreenOrientation(!lock);
    }

    return (
        <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
            <Text style={styles.title}></Text>

            <View style={styles.row}>
                <Text style={styles.title}>Bloquer Portrait mode</Text>
                <Switch onValueChange={toggleLockAndOrientation} value={lock} />

            </View>

            <View>
                <Text style={styles.title}>Mode Sombre</Text>
                <Switch value={theme === 'dark'} onValueChange={toggleTheme} />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    light: { backgroundColor: '#dda4a4ff' },
    dark: { backgroundColor: '#111111' },
    title: { fontSize: 17, fontWeight: "600", marginBottom: 8, color: "#fff" },


})
