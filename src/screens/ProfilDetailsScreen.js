import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { UsersContext } from "../context/UsersContext";
import { ThemeContext } from "../context/ThemeContext"; 
import { lightTheme, darkTheme } from "../assets/colorPalette";

export default function ProfilDetailsScreen() {
  const { users } = useContext(UsersContext);
  const { user: currentUser } = useContext(CurrentUserContext);
  const userInfos = users.get(currentUser);

  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? lightTheme : darkTheme;

  const [phone, setPhone] = useState(userInfos.phone || "");
  const [joinDate, setJoinDate] = useState(userInfos.joinedDate || "");
  const [lastLogin, setLastLogin] = useState(userInfos.lastLogin || "");

  const handleSave = () => {
    Alert.alert("Succès", "Vos informations ont été mises à jour ✅");
    console.log({ phone, joinDate, lastLogin });
  };

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: colors.background },
    headerBackground: {
      width: "100%",
      height: 180,
      backgroundColor: colors.primary,
      borderBottomLeftRadius: 180,
      borderBottomRightRadius: 180,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontWeight: "bold",
      fontSize: 25,
      textDecorationLine: "underline",
      color: colors.text,
    },
    form: {
      marginTop: 30,
      marginHorizontal: 10,
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
      marginTop: 20,
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Autres informations du compte</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formRow}>
          <Text style={styles.label}>Numéro de téléphone :</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Entrez votre numéro"
            placeholderTextColor={colors.secondary}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Date de création du compte :</Text>
          <TextInput
            style={styles.input}
            value={joinDate}
            onChangeText={setJoinDate}
            placeholder="AAAA-MM-JJ"
            placeholderTextColor={colors.secondary}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Dernière connexion :</Text>
          <TextInput
            style={styles.input}
            value={lastLogin}
            onChangeText={setLastLogin}
            placeholder="AAAA-MM-JJ"
            placeholderTextColor={colors.secondary}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>💾 Sauvegarder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
