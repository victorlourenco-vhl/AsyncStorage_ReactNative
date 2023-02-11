import React, { useState } from 'react';
import { StyleSheet, View, Button } from "react-native";
import { Input } from 'react-native-elements';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState()
    const [senha, setSenha] = useState("")

    async function handleNew(){
        const id = uuid.v4();
        const newDate = {
            id,
            nome, 
            idade, 
            senha
        }

        await AsyncStorage.setItem("@meuform:passwords", JSON.stringify(newDate));
        Toast.show({
            type: "success",
            text1: "Cadastrado com sucesso"
        })

        console.log(newDate)
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    inputContainerStyle={styles.formInput}
                    label="Nome"
                    onChangeText={setNome}
                />
                <Input
                    label="Idade"
                    keyboardType='numeric'
                    onChangeText={setIdade}
                />
                <Input
                    label="Senha"
                    secureTextEntry={true}
                    onChangeText={setSenha}
                />
                <Button
                    title='CADASTRAR'
                    onPress={handleNew}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formInput:{
        borderRadius: 1,
    }

})