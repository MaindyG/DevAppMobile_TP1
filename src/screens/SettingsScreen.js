import React, { useContext } from 'react';

import { View, Text, Switch, StyleSheet,Button,Alert } from 'react-native';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen({navigation}) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { setCurrentUser } = useContext(CurrentUserContext);
    const handleLogout = () => {Alert.alert('Déconnexion', 'Vous êtes sur le point de vous deconnecter', [
      {
        text: 'Confirmer',
        onPress: () => setCurrentUser(null),
        style: '',
      },
      {text: 'Annuler', onPress: () => console.log('Deconnexion annulée')},
    ]);
    }
    return(
        <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
            <Text style={styles.title}></Text>
            <View>
                <Text>Mode Sombre</Text>
                <Switch value={theme === 'dark'} onValueChange={toggleTheme}/>
                <Button title="Déconnexion" color="#ff0000ff" style={styles.logOutButton} onPress={handleLogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 }, 
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, 
    light: { backgroundColor: '#ffffff' },
    dark: { backgroundColor: '#111111' }, 

  
})