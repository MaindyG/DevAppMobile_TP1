import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { addUserToList } from "../hooks/addUser";
import { Swipeable } from 'react-native-gesture-handler';


export default function ContactScreen() {

    const { users, addUser, updateUser } = addUserToList ([
      { id: 1, image: require('../assets/images/image1.jpg'), name: 'Alice' },
      { id: 2, image: require('../assets/images/image2.jpg'), name: 'John' },
      { id: 3, image: require('../assets/images/image3.jpg'), name: 'Alex' }
    ]);

  const [name, setName] = useState('');
  const [editContactId, setEditContactId] = useState(null);

  const add = () => {
    if (name.trim()) {
      addUser({
        id: newId,
        name: name.trim(),
        image: require('../assets/images/image4.jpg'),
      });
      setName('');
    }
  };

  const onEdit = (user) => {
    setEditContactId(user.id);
    setName(user.name);
  };

  const handleSaveEdit = () => {
    if (!editContactId) return;

    updateUser({
      id: editContactId,
      name: name.trim(),
      image: users.find(u => u.id === editContactId)?.image,
    });

    setEditContactId(null);
    setName('');
  };

  const LeftAction = ({ onPress }) => (
    <View style={styles.leftAction}>
      <TouchableOpacity onPress={onPress} style={styles.actionButton}>
        <Text style={styles.actionText}>Modifier</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    if (item.id === editContactId) {
      return (
        <View style={[styles.item, { width: Dimensions.get('window').width * 0.9 }]}>
          <Image source={item.image} style={styles.image} />
          <TextInput
            style={styles.inputEdit}
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity onPress={handleSaveEdit} style={styles.saveButton}>
            <Text style={{ color: "white" }}>Sauvegarder</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <Swipeable renderLeftActions={() => <LeftAction onPress={() => onEdit(item)} />}>
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.name}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TouchableOpacity onPress={add} style={styles.button}>
        <Text style={styles.buttonText}>Ajouter Élève</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f9c2ff',
    padding: 15,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#841584',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 18,
  },
  leftAction: {
    backgroundColor: '#FF69B4',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  actionButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputEdit: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#388e3c',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
});
