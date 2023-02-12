import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Card } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function CardUser({ item }) {

    const { removeItem } = useAsyncStorage("@meuform:passwords")

    return (
        <Card>
            <Card.Title>Usuário</Card.Title>
            <Card.Divider />
            <View style={styles.container}>
                <View>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Idade: {item.idade}</Text>
                    <Text>Senha: {item.senha}</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity
                    style={{marginLeft: 2}}
                        onPress={() => console.log("teste")}
                    >
                        <Icon
                            name='edit'
                            type='font-awesome'

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{marginLeft: 15}}
                        onPress={() => console.log("teste")}
                    >
                        <Icon
                            name='close'
                            type='font-awesome'
                            />
                    </TouchableOpacity>
                </View>
            </View>
            
        </Card>
        // <View>
        //     {/* <Text>{item.id}</Text> */}
        //     <Text>{item.nome}</Text>
        //     <Text>{item.idade}</Text>
        //     <Text>{item.senha}</Text>
        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icons: {
        display: 'flex',
        flexDirection: 'row', 
        
    }
})