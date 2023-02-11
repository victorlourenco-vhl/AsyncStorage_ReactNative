import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function AppTeste() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  async function salvar() {
    const usuario =
    {
      nome, idade
    }
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
  }
  async function mostrarUsuario(){
    const json = await AsyncStorage.getItem("usuario");
    const usuario = JSON.parse(json);

    Alert.alert(
      'Informações do Usuário', 
      `Nome: ${usuario.nome} - Idade: ${usuario.idade}`
    )
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
      <TouchableOpacity style={styles.buttonCadastrar} onPress={salvar}>
        <Text>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastrar} onPress={mostrarUsuario}>
        <Text>
          Usuários
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
  buttonCadastrar: {
    height: '4%',
    width: '35%',
    backgroundColor: '#73e0ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 4
  },
})