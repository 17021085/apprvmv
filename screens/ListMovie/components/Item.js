import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView,StatusBar } from 'react-native';


export default function Item() {
  return (
    <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item: {
    flex:1,
    backgroundColor: '#f9c2ff',
    
    marginHorizontal:4,
    marginBottom:8,
  
    height:160
    
  },
  title: {
    fontSize: 32,
  },
});