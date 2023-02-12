import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from "react-native";
import { Input } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';

export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState()
    const [senha, setSenha] = useState("")

    const {getItem, setItem} = useAsyncStorage("@meuform:passwords")

    async function handleNew() {
        try {
            const id = uuid.v4();
            const newDate = {
                id,
                nome,
                idade,
                senha
            }

            // READ
            const response = await getItem();
            const previousData = response ? JSON.parse(response) : [];
            const data = [...previousData, newDate];

            // CREATE
            await setItem(JSON.stringify(data));

            // DELETE

            Toast.show({
                type: "success",
                text1: "Cadastrado com sucesso"
            })

        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Não foi possível savar o cadastro no banco de dados"
            })
        }
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
    formInput: {
        borderRadius: 1,
    }

})