import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Image,FlatList,ScrollView ,StatusBar} from 'react-native';
import {Ionicons, Entypo } from '@expo/vector-icons'



export default function profile() {
  return (
    <View style={styles.container}>
        
        {/* <ImageBackground source={require('../../../assets/m9.png')} style={{width:'100%',height:500}}/> */}
       <View style={styles.Topbuttons}>
        <Ionicons name="md-arrow-back" color='#fff' size={32}/>
      <Text style={styles.title}>PROFILE</Text>
      <Entypo name="dots-three-vertical" color='#fff' size={24}/>
        </View>
        <View>
       
        <Image source={require('../../../assets/144.jpg')} style={styles.img} />
        </View>
      <Text  style={styles.info}> Marco Reus</Text>
      <Text style={styles.email}>Email:exemple@gmail.com</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      height:300,
      backgroundColor:'#000',
     alignContent:'center'
      
      
  },
    Topbuttons: {
        flexDirection:"row",
        justifyContent:"space-between",
        // position: "absolute",
        top: 30,
        marginHorizontal:16,
        
       
    },
    title:{
      color:'#fff',
      fontSize:28
    },
    img:{
        width:130,
        height:130,
        borderRadius:50,
        position:'absolute',
        top:60,
        left:120,
        
        
    },
    info:{
      color:'#fff',
      top:190,
      left:150,



    },
    email:{
      color:'#fff',
      top:190,
      left:110
    }
});