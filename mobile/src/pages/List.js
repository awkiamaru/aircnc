import React,{useState,useEffect} from "react";
import {SafeAreaView,View, Text, AsyncStorage, Image, StyleSheet} from "react-native";

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'
import { ScrollView } from "react-native-gesture-handler";


export default function List(){
    const [techs, setTechs] = useState([]);

useEffect(() => {

    AsyncStorage.getItem('techs').then(storageThechs=>{
        const techsArray = storageThechs.split(',').map(tech => tech.trim());
        setTechs(techsArray)
    })
}, [])

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo}></Image>
<ScrollView>
{techs.map(tech =>  <SpotList key={tech} tech={tech}/>)}
</ScrollView>
    
        </SafeAreaView> 
)}
const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    logo:{
        height:32,
        resizeMode:"contain",
        alignSelf:'center',
        marginTop:30
    }
})