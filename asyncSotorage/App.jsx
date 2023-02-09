import React, { useState } from "react";
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  function salvar(){
    const usuario = 
    {
      nome, idade
    }
    AsyncStorage.setItem("usuario", JSON.stringify(usuario));
  }

  return (
    <View style={styles.container}>
      <Text>Olá, Mundo!</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={text => setNome(text)}
        placeholder="Digite seu nome"
      />
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={text => setIdade(text)}
        placeholder="Digite sua idade"
      />
      <TouchableOpacity style={styles.buttonCadastrar}>
        <Text>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '70%',
    padding: 5,
    marginVertical: 10
  },
  buttonCadastrar:{
    height: '4%',
    width: '28%',
    backgroundColor: '#73e0ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
})