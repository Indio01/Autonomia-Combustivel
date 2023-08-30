import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//$ npm install @react-native-picker/picker --save

export default function App() {

  const [valorGasolina, setValorGasolina] = useState('');

  const buscarHandle= async () =>{
    let URL = `http://api.meuspostos.com.br/cidades.json`
    try {
      let page= await fetch(URL)
      let json = await page.json()
      console.log(json)  
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  };


  return (
    <View style={styles.container}>
      <Pressable onPress={buscarHandle}>
              <Text style={styles.texto}>Buscar API no console</Text>
          </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
