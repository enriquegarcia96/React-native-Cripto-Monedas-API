import React from 'react';
import { View,Text, StyleSheet, Platform } from 'react-native'

const Header = () => {

    return (
        <Text style={styles.encabezado}>Criptomonedas</Text>
    )

}


const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS == 'ios' ? 50 : 10,
        fontFamily: 'FrederickatheGreat-Regular',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 20
    }

})
 
export default Header;