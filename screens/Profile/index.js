import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Image,FlatList,ScrollView ,StatusBar} from 'react-native';
import {Ionicons, Entypo } from '@expo/vector-icons'
import Header from './component/Header'
import Favor from './component/Favor'


export default function profile() {
  return (
    <View style={styles.container}>
        <Header/>
        <Favor/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
