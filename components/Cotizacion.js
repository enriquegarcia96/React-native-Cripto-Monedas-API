import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Cotizacion = ({ resultado }) => {

    //--- comprueba si un objeto esta vacio ---//
    if ( Object.keys( resultado ).length === 0 ) return null;

    return ( 
        <View style={style.resultado}>
            <Text style={[style.texto, style.precio]}>
                <Text style={style.span}>{resultado.PRICE} </Text>
            </Text>

            <Text style={style.texto}>Precio más alto del dia:{' '}
                <Text style={style.span}> {resultado.HIGHDAY} </Text>
            </Text>

            <Text style={style.texto}>Precio más bajo del dia:
                <Text style={style.span}> {resultado.LOWDAY} </Text>
            </Text>

            <Text style={style.texto}>Variación últimas 24 horas:{' '}
                <Text style={style.span}> {resultado.CHANGEPCT24HOUR} %</Text>
            </Text>

            <Text style={style.texto}>Última actualización:{' '}
                <Text style={style.span}> {resultado.LASTUPDATE} </Text>
            </Text>
        </View>
     );
}


const style = StyleSheet.create({
    resultado:{
        backgroundColor: '#16213e',
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'IndieFlower-Regular',
        fontSize: 18,
        marginBottom: 10

    },
    precio: {
        fontSize: 38
    },
    span:{
        fontFamily: 'Lato-Black'
    }
})
 
export default Cotizacion;