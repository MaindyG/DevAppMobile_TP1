import React, { use, useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'; 
import { UsersContext } from "../context/UsersContext";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function LoginScreen({navigation}) {
    const {users, addAUser} = useContext(UsersContext);
    const {user, setCurrentUser} = useContext(CurrentUserContext);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();


    const onSubmit = () => {
        ((users.has(userName)) && (users.get(userName).password == password)) ? setCurrentUser(userName) : null;      
        console.log(user);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page D'Authentification</Text>
            <Text style={styles.title}>Nom D'utilisateur</Text>
            <TextInput style={styles.input}
            onChangeText={setUserName}
            value={userName}
            />
            <Text style={styles.title}>Mot de passe</Text>
            <TextInput style={styles.input}
            onChangeText={setPassword}
            value={password}
            />
            <TouchableOpacity style={styles.btn}>
                <Button title="Envoyer"
                onPress={onSubmit}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
                <Button title="Page d'inscription"
                onPress={() => navigation.navigate('Register')}
                />
            </TouchableOpacity>
        </View>
    )
}

 const styles = StyleSheet.create({ 
        container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }, 
        title: { fontSize: 22, fontWeight: '600', marginBottom: 8 }, 
        input: {height: 40, minWidth: 200, margin: 12, borderWidth: 1, padding: 10, },
        btn: {backgroundColor: "pink", color: "white", borderRadius: 50, marginTop: 50, padding: 10, width: 200}, 
        btn1: {borderRadius: 50, marginTop: 50, padding: 10, backgroundColor: "#FFB6C1", width: 200}


}); 