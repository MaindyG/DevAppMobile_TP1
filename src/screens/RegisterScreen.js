import React, { use, useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { UsersContext } from "../context/UsersContext";
import { CurrentUserContext } from "../context/CurrentUserContext";
import User from "../template/user.json"
export default function RegisterScreen({ navigation }) {
  const { users, addAUser } = useContext(UsersContext);
  const { user } = useContext(CurrentUserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = () => {
    console.log(users)
    let validUsername = userName != "" && !users.has(userName)
    if (!validUsername) {
      return
    }
    if (password != "") {
      let newUserCredentials = { ...User }
      newUserCredentials.password = password
      newUserCredentials.profilePicturePath = require('../assets/images/image4.jpg')
      newUserCredentials.name = userName


      addAUser(userName, newUserCredentials)
      navigation.navigate('Login')


    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nom D'utilisateur</Text>
      <TextInput style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <Text style={styles.title}>Mot de passe</Text>
      <TextInput style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.text}>Confirmer</Text>
      </TouchableOpacity>

      
      {/* <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}> Connexion</Text>
      </TouchableOpacity> */} 
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: "#dda4a4ff" },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  input: { height: 40, minWidth: 200, margin: 12, borderWidth: 1, padding: 10, borderColor: "#fff", color: "#fff" },
  btn: {
    backgroundColor: "#dc6375ff",
    color: "white",
    borderRadius: 50,
    marginTop: 40,
    padding: 10,
    width: 200,
    height: 50
  },
  btn1: {
    borderRadius: 50,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#dc6375ff",
    width: 200,
    height: 50
  },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 8, color: "#fff" },

  text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 17,
    color: "#fff"
  }

}); 