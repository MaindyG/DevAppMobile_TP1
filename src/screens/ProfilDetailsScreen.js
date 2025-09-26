// screens/ProfilDetailsScreen.js
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { UsersContext } from "../context/UsersContext";

export default function ProfilDetailsScreen() {
  const { users } = useContext(UsersContext);
  const { user: currentUser } = useContext(CurrentUserContext);
  const userInfos = users.get(currentUser);

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
