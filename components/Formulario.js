import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';



const Formulario = ({ moneda, criptoMoneda, guardarMoneda, guardarCriptoMoneda, guardarConsultarAPI }) => {

    const [ criptomonedas, guardarCriptoMonedas ] = useState([]);

    /**
     *  para hacer consultas a una API 
     ** carga el componente una vez o cuando haya un cambio 
     */ 
    useEffect( () =>{

        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            //console.log(resultado.data.Data);
            guardarCriptoMonedas( resultado.data.Data )
        }
        consultarAPI();
    },[]);

    // --- almacena las selecciones del usuario ---//
    const obtenerMoneda = moneda => {
        //console.log(moneda)
        guardarMoneda(moneda)
    }

    //--- Obtiene la cripto moneda ---//
    const obtenerCriptomoneda = cripto => {
        //console.log(cripto)
        guardarCriptoMoneda(cripto)
    }

    //--- funcion que cotiza el precio ---//
    const cotizarPrecio = () => {

        if (moneda.trim() === '' || criptoMoneda.trim() === '') {
            mostrarAlerta();
            return;
        } 

        //--- Cambiar el state de consultarAPI ---//
        guardarConsultarAPI(true);
    }

    const mostrarAlerta = ()=>{
        Alert.alert(
            'Error...',
            'Ambos Campos Son Oblogatorios',
            [
                {text: 'OK'}
            ]
        )
    }

    
    return ( 
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}//para leer los valores que el usuario seleccione
                onValueChange={ moneda => obtenerMoneda(moneda) }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item  label='- Seleccione -' value="" />
                <Picker.Item label='Peso Hondureño' value='HND' />
                <Picker.Item label='Dolar de Estados Unidos' value='USD' />
                <Picker.Item label='Peso Mexicano' value='MXN' />
                <Picker.Item label='Euro' value='EUR' />
                <Picker.Item label='Libra Esterlina' value='GBP' />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={criptoMoneda}//para leer los valores que el usuario seleccione 
                onValueChange={ cripto => obtenerCriptomoneda(cripto) }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item  label='- Seleccione -' value="" />
                    {
                        //genera los picker
                        criptomonedas.map( cripto => (
                            <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                        ))
                    }
            </Picker>

            <TouchableHighlight

                style={styles.btnCotizar}
                onPress={ () => cotizarPrecio() }

            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>

        </View>
     );
}

const styles = StyleSheet.create({

    label:{
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar:{
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,
    },
    textoCotizar:{
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'

    }

})
 
export default Formulario;