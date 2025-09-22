import React from 'react';
import Toggle from 'react-native-toggle-input'
import { View, Text, StyleSheet } from 'react-native';
import { goodOrientation } from '../hooks/orientation';
import { lockOrientationToPortrait } from '../hooks/orientation';

export default function SettingsScreen() {
    const [toggle, setToggle] = React.useState(false)

    return(
   
            <View style={styles.row}>
                <Text>Bloquer l'orientation en mode Portrait</Text>
                <Toggle on={lockOrientationToPortrait} off={goodOrientation} toggle={toggle} setToggle={setToggle} />
            </View>
 
        
    )
}

const styles = StyleSheet.create({
    row: { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }
})
