import { Text } from "@rneui/base";
import { StyleSheet, TextInput, View } from "react-native";

export default function Input({label, type, password}){
    return(
        <View style={styles.container}>
            {/* <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={password}
                keyboardType={type == null ? "default" : type}
            />
               */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    label:{
        marginBottom: 3,
        color: '#7c7c7c'
    },
    input:{
        width: 270, 
        borderWidth: 1,
        borderRadius: 5
    }
})