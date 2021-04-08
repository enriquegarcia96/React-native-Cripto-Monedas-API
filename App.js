import React, { useState, useEffect } from 'react';
import {StyleSheet,Image, View} from 'react-native';
import axios from 'axios'


import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const App  = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptoMoneda, guardarCriptoMoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  
  useEffect( () => {
      //console.log('Consultar API a cambiado');

      const cotizarCriptoMoneda = async () =>{

        if (consultarAPI) {
          console.log('Listo para consultar ');
  
          // consultar la API para obtener la cotizacion
  
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
          
          const resultado = await axios.get(url);

          console.log(resultado.data.DISPLAY[criptoMoneda][moneda]); 

          //para hacer dinamica la consulta[][]
          guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);

          guardarConsultarAPI(false);

        }
      }
      cotizarCriptoMoneda()
      
  },[consultarAPI]);//escucha los cambios de la variable de consultar API

  return (
      <>

        <Header />

          <Image 
            style={styles.imagen}
            source={ require('./assets/img/cryptomonedas.png') }
          />

        <View style={styles.contenido}>
            <Formulario 
                moneda={ moneda }
                criptoMoneda={ criptoMoneda }
                guardarMoneda={ guardarMoneda }
                guardarCriptoMoneda={ guardarCriptoMoneda }
                guardarConsultarAPI={ guardarConsultarAPI }
            />

            <Cotizacion resultado={resultado} />


        </View>

      </>
  )
    
};

const styles = StyleSheet.create({
  imagen:{
    width:'100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido:{
    marginHorizontal: '2.5%', // para dar espacio a la izquierda de la pantalla
  }
});

export default App;
