import React,{useState, useEffect} from "react";
import {Image, AsyncStorage,
     KeyboardAvoidingView,StyleSheet, 
     Text,TextInput,TouchableOpacity,View } from "react-native";

import api from '../services/api';
import logo from '../assets/logo.png'

export default function Login({navigation}){
    const [email, setEmail] = useState('joaozinho@joao');
    const [techs, setTechs] = useState('Java,ReactJs,React-Natice,PHP,Perl,Psql,GCP,Nosql,sql,JS');


useEffect(()=>{
    // AsyncStorage.getItem('user').then(user =>{
        AsyncStorage.removeItem('user').then(user =>{
        if(user){
            navigation.navigate('List');
        }
    })
},[])

async function handleSubmit(){
    console.log('====================================');
    console.log(email, techs);
    console.log('====================================');
    const response = await api.post('/sessions',{
        email
    })
    const {_id} = response.data;
    console.log(_id);

    await AsyncStorage.setItem('user',_id)
    await AsyncStorage.setItem('techs', techs)
    navigation.navigate('List')
}


    return <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
        <Image source={logo}/>
        <View style={styles.form}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}>

            </TextInput>
            <Text style={styles.label}>Tecnologias</Text>
            <TextInput
            style={styles.input}
            placeholder="Tecnologias de interesse"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="words"
            value={techs}
            onChangeText={setTechs}
            autoCorrect={false}>

            </TextInput>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Encontrar spots</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
        marginTop:30
    },
    label:{
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
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
    }
})