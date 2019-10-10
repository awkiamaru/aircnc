import React,{useState} from "react";
import {Alert, Text, StyleSheet,TextInput,Image, TouchableOpacity,AsyncStorage} from "react-native";
import { SafeAreaView } from "react-navigation";

import logo from '../assets/logo.png'
import api from '../services/api';

export default function Book({navigation}){
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit(){

        const user_id = await AsyncStorage.getItem('user');

        console.log('====================================');
        console.log(date);
        console.log('====================================');
        
        await api.post(`/spots/${id}/bookings`,{
            date
        },{
            headers: { user_id}
        })

        Alert.alert('Solicitação enviada', 'Sua solicitação foi enviada com sucesso!')

        navigation.navigate('List');
    }

    function handleCancel(){
        navigation.navigate('List');
    }
    

    return (
<SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={logo}></Image>

<Text style={styles.label}>Data de interesse</Text>
            <TextInput
            style={styles.input}
            placeholder="Qual data você quer reservar?"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={date}
            onChangeText={setDate}
            autoCorrect={false}/>
             <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:30,

    },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
        marginTop:30
    },
    label:{
        marginTop:20,
        fontWeight:'bold',
        color:'#444',
        marginBottom:8
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color:'#444',
        height:44,
        marginBottom:20,
        borderRadius:5
    },
    button:{
        height:42,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f05a5b',
        borderRadius:5
    },
    buttonCancel:{
        height:42,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ccc',
        borderRadius:5
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
    },
    logo:{
        height:32,
        resizeMode:"contain",
        alignSelf:'center',
        marginTop:30
    }
})