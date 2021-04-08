import React, { useState, useEffect } from 'react';
import {StyleSheet,Image, View, ScrollView, ActivityIndicator, Text} from 'react-native';
import axios from 'axios'


import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const App  = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptoMoneda, guardarCriptoMoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);


  
  useEffect( () => {
      //console.log('Consultar API a cambiado');

      const cotizarCriptoMoneda = async () =>{

        if (consultarAPI) {
          console.log('Listo para consultar ');
  
          // consultar la API para obtener la cotizacion
  
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
          
          const resultado = await axios.get(url);

          //console.log(resultado.data.DISPLAY[criptoMoneda][moneda]); 


          //--- muestra el spinner, ya que aqui ya tenemos una cotizacion ---//
          guardarCargando(true);

          
          //--- Ocultar el spinner y mostrar el resultado ---//
          setTimeout( () => {

            //para hacer dinamica la consulta[][]
            guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
            guardarConsultarAPI(false);
            guardarCargando(false);//oculta el spinner

          },2000)

        }
      }
      cotizarCriptoMoneda()    
  },[consultarAPI]);//escucha los cambios de la variable de consultar API


  //--- Mostrar el Spinner o el resultado ---//
  const componente = cargando ? <ActivityIndicator size='large' color='#5E49E2' /> :  <Cotizacion resultado={resultado} />


  return (
      <>
          <ScrollView style={{ backgroundColor: '#1a1a2e' }}>

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
            </View>

              <View style={{ marginTop: 40 }}>
                  {componente}
              </View>

           
          </ScrollView> 
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
