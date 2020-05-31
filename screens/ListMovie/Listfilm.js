import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView,StatusBar } from 'react-native';
import sd from '../../assets/m2.png'

 
 const data=[
    {id:'1',name:'../../assets/m2.png'},
    {id:'2',name:'hai'},
    {id:'3',name:'bat'},
    {id:'4',name:'bon'},
    {id:'5',name:'nam'},
    {id:'6',name:'sau'},
    {id:'7',name:'sau'},
    {id:'8',name:'sau'},
  ];

  // function Item({ name }) {
  //   return (
  //     <View style={styles.item}>
  //       <Image source={requi}/>
  //     </View>
  //   );
  // }

export default class Listfilm extends Component {
  render(){
  return (
    <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.title}>Movie Review</Text>
    </View>
    <FlatList
    data={data}
    numColumns={2}
    renderItem={({item}) => <Image style={styles.item} source={require('../../assets/m2.png')}/>}
    keyExtractor={item => item.id}
    />

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    
  },
  item: {
    flex:1,
    borderRadius:5,
    marginHorizontal:4,
    marginVertical:4,
  
    height:240
    
  },
  title: {
    fontSize: 32,
    color:'#000',
    

  },
  head:{
    backgroundColor:"#fed700",
    height:80,
   top:4,
    borderRadius:5,
    padding:20,
    marginBottom:4,
    marginHorizontal:4,
  }
});
