import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Olá, teste</Text>
            <TouchableOpacity
                style={styles.buttonAddUser}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Icon name='adduser' size={40} color='#000' />
            </TouchableOpacity>

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