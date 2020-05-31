import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView,StatusBar } from 'react-native';
import {colors} from '../../styles';
import Header from './components/Header'
import About from './components/About';
import State from './components/State'
import Content from './components/Content'

export default function index() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
     <Header/>
     <About/>
    <State/>
    <Content/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});