import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { ThemeContext } from '../context/ThemeContext';
import { changeScreenOrientation } from '../hooks/orientation';
import { lightTheme, darkTheme } from '../assets/colorPalette';

export default function SettingsScreen({ navigation }) {
  const [lock, toggleLock] = useState(true);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const colors = theme === 'light' ? lightTheme : darkTheme;

  const handleLogout = () => {
    Alert.alert('Déconnexion', 'Vous êtes sur le point de vous déconnecter', [
      {
        text: 'Confirmer',
        onPress: () => setCurrentUser(null),
        style: 'destructive',
      },
      { text: 'Annuler', onPress: () => console.log('Déconnexion annulée') },
    ]);
  };

  const toggleLockAndOrientation = () => {
    toggleLock(previous => !previous);
    changeScreenOrientation(!lock);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Paramètres</Text>

      <View style={styles.row}>
        <Text style={{ color: colors.text }}>Bloquer Portrait mode</Text>
        <Switch onValueChange={toggleLockAndOrientation} value={lock} />
      </View>

      <View style={styles.row}>
        <Text style={{ color: colors.text }}>Mode Sombre</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />

      </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginTop: 20
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  logoutBtn: {
      backgroundColor: "#ff0000",
      borderRadius: 50,
      marginTop: 40,
      marginBottom: 30,
      padding: 10,
      width: 200,
      alignSelf: "center",
    },
  logoutText: {
      textAlign: "center",
      fontSize: 20,
      color: "#fff",
    },
});
