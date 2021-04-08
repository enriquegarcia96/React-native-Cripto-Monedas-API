import React from 'react';
import { View,Text, StyleSheet, Platform } from 'react-native'

const Header = () => {

    return (
        <>
            <Text style={styles.encabezado}>Criptomonedas</Text>
            <Text style={styles.firma}>Enrique  S.  García</Text>
        </>
    )

}


const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS == 'ios' ? 50 : 10,
        fontFamily: 'FrederickatheGreat-Regular',
        backgroundColor: '#16213e',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        color: '#FFF',
        marginBottom: 20, 
    },
    firma:{
        fontFamily: 'AlmendraDisplay-Regular',
        color:'#FFF', 
        marginTop: -10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
        
    }

})
 
export default Header;