import {View, Text, StyleSheet,TouchableOpacity, Keyboard, FlatList, ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState, useEffect, useRef } from 'react'; 

const Separator = () => { 
    return <View style={styles.separator} />; 
} 

export default function GerenciarProduto() {

    const [passagem, setPassagem] = useState('');
    const [destinoInicial, setDestinoInicial] = useState('');
    const [destinoFinal, setDestinoFinal] = useState('');
    const [valor, setValor] = useState('');
    const [key, setKey] = useState('');

    return (

        <View style={styles.container}>
         <Separator/>           
            <TextInput
                placeholder='Passagem Aérea'
                left={<TextInput.Icon icon="ticket-account" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setPassagem(text)}
                value={passagem}
            />
        <Separator/>
            <TextInput
                placeholder='Destino Inicial'
                left={<TextInput.Icon icon="airplane-search" />}
                style={styles.input}
                onChangeText={(text) => setDestinoInicial(text)}
                value={destinoInicial}
            />
        <Separator/>
            <TextInput
                placeholder='Destino Final'
                left={<TextInput.Icon icon="airplane-marker" />}
                style={styles.input}
                onChangeText={(text) => setDestinoFinal(text)}
                value={destinoFinal}
            />
        <Separator/>
            <TextInput
                placeholder='Preço (R$)'
                left={<TextInput.Icon icon="currency-usd" />}
                style={styles.input}
                onChangeText={(text) => setValor(text)}
                value={valor}
            />
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 13,
        borderRadius: 8
    },

    separator: {
        marginVertical: 5,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3ea6f2',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },

    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 20,
    },

    listar: {
        fontSize: 20,
        textAlign: 'center'
    }
}); 