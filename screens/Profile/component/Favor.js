import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView } from 'react-native';
import { colors } from '../../../styles';

const film = [
    require('../../../assets/m2.png'),
    require('../../../assets/m3.jpg'),
    require('../../../assets/m4.jpg'),
    require('../../../assets/m5.png'),
    require('../../../assets/m6.png'),
    require('../../../assets/m7.jpg'),
]

export default function Favor() {
  return (
    <View style={styles.container}>
        <View style={styles.head}>
     <Text style={styles.title}>My Favorite Film</Text>
    

             </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height:500
  },
  head:{
      backgroundColor:'#7C7C7C',
      height:500,
      marginVertical:8
  },
  title:{
      color:'#fff',
      marginLeft:20,
      marginTop:15,
      fontSize:15,
      alignContent:'center'
      
  },
 
  film:{
      width:100,
      height:100,
      marginBottom:12,
      

  }

});
