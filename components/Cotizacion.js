import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Cotizacion = ({ resultado }) => {

    if ( Object.keys( resultado ).length === 0 ) return null;

    return ( 
        <Text>El precio del bitcoin : { resultado.PRICE }</Text>
     );
}
 
export default Cotizacion;