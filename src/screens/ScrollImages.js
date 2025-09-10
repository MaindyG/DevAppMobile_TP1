import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

export default function ScrollImages() {
    let id = 0;

    const personsInfo = [
        { id: id++, image: require('../images/image1.jpg'), name: 'Alice' },
        { id: id++, image: require('../images/image2.jpg'), name: 'John' },
        { id: id++, image: require('../images/image3.jpg'), name: 'Alex' }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <FlatList
            data={personsInfo}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9c2ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});
