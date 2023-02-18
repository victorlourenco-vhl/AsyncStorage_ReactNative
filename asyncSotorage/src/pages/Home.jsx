import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../components/CardUser';

export default function Home({ navigation }) {
    const [data, setData] = useState([])

    async function handleFetchData() {
        const response = await AsyncStorage.getItem("@meuform:passwords")
        const dataJson = JSON.parse(response)
        setData(dataJson)
    }

    useFocusEffect(useCallback(() => {
        handleFetchData();
    }, []))

    return (
        <View style={styles.container}>

            <Text>Olá, teste</Text>
            <TouchableOpacity
                style={styles.buttonAddUser}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Icon name='adduser' size={40} color='#000' />
            </TouchableOpacity>
            <FlatList
                style={{ marginBottom: 90 }}
                data={data}
                renderItem={({ item }) =>
                    <Card item={item} data={data} setData={setData}/>
                }
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    buttonAddUser: {
        alignItems: 'flex-end',
        marginRight: 15
    }
})