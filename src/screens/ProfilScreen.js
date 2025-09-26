import { 
  View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput, ScrollView 
} from 'react-native';
import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { UsersContext } from '../context/UsersContext';
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";  
import { lightTheme, darkTheme } from "../assets/colorPalette"; 

export default function ProfilScreen() {
  const { users } = useContext(UsersContext);
  const { user: currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const displayName = currentUser ?? "Utilisateur inconnu";
  const userInfos = users.get(currentUser);
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? lightTheme : darkTheme;

  const [email, setEmail] = useState(userInfos.email);
  const [dayOfBirth, setDayOfBirth] = useState(userInfos.dayOfBirth);
  const [location, setLocation] = useState(userInfos.location);

  const handleLogout = () => {
    Alert.alert("Déconnexion", "Vous êtes sur le point de vous déconnecter", [
      { text: "Confirmer", onPress: () => setCurrentUser(null), style: "destructive" },
      { text: "Annuler", onPress: () => console.log("Déconnexion annulée") },
    ]);
  };

  const handleSave = () => {
    Alert.alert("Sauvegarde", "Vos informations ont été mises à jour !");
    console.log({ email, dayOfBirth, location });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerBackground: {
      width: "100%",
      height: 180,
      backgroundColor: colors.secondary,
      borderBottomLeftRadius: 180,
      borderBottomRightRadius: 180,
      justifyContent: "center",
      alignItems: "center",
    },
    profilWrapper: {
      position: "absolute",
      bottom: -60,
      alignItems: "center",
    },
    profil: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 70,
      textAlign: "center",
      color: colors.text,
    },
    bio: {
      textAlign: "center",
      fontSize: 14,
      marginTop: 5,
      color: colors.text,
    },
    form: {
      marginTop: 30,
      marginHorizontal: 20,
      padding: 20,
      backgroundColor: colors.card,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    formRow: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.secondary,
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.background,
    },
    button: {
      marginTop: 30,
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.profilWrapper}>
          <Image style={styles.profil} source={users.get(currentUser).profilePicturePath} />
        </View>
      </View>

      <Text style={styles.title}>{displayName}</Text>
      <Text style={styles.bio}>{userInfos.bio}</Text>

      <View style={styles.form}>
        <View style={styles.formRow}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Date de naissance</Text>
          <TextInput
            style={styles.input}
            value={dayOfBirth}
            onChangeText={setDayOfBirth}
            placeholder="JJ/MM/AAAA"
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>💾 Sauvegarder</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
            style={{backgroundColor : colors.secondary, width: 200, marginLeft: 120, marginTop: 50, padding: 15, borderRadius: 50}}
            onPress={() => navigation.navigate("ProfilDetails")}
            >
        <Text style={{textAlign: 'center'}}>Plus d'infos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
