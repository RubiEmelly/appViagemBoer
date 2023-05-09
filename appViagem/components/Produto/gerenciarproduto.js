import React, { useState, useEffect, useRef } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, FlatList, ActivityIndicator} from 'react-native'; 
import { TextInput } from 'react-native-paper'; 

export default function GerenciarProdutos(){

    const [nome, setNome] = useState('');    
    const [destinoInicial, setDestinoInicial] = useState('');     
    const [destinoFinal, setDestinoFinal] = useState(''); 
    const [dataSaida, setDataSaida] = useState('');
    const [dataChegada, setDataChegada] = useState('');
    const [horarioSaida, setHorarioSaida] = useState('');
    const [horarioChegada, setHorarioChegada] = useState('');   
    const [classe, setClasse] = useState('');      
    const [valor, setValor] = useState('');  
    const [key, setKey] = useState(''); 

    return ( 
        <View style={styles.container}> 
            <TextInput 
                placeholder='Produto' 
                left={<TextInput.Icon icon="car" />} 
                maxLength={40} 
                style={styles.input} 
                onChangeText={(texto) => setName(texto)} 
                value={nome} 
            /> 
            <TextInput 
                placeholder='Marca' 
                left={<TextInput.Icon icon="sale" />} 
                style={styles.input} 
                onChangeText={(texto) => setBrand(texto)} 
                value={brand} 
            /> 
            <TextInput 
                placeholder='Preço' 
                left={<TextInput.Icon icon="sack" />} 
                style={styles.input} 
                onChangeText={(texto) => setPrice(texto)} 
                value={price} 
            /> 
            <TextInput 
                placeholder='Cor' 
                left={<TextInput.Icon icon="color" />} 
                style={styles.input} 
                onChangeText={(texto) => setColor(texto)} 
                value={color} 
            />                  
        </View> 
    ); 
} 
