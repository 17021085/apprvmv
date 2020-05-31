import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView } from 'react-native';
import { colors } from '../../../styles'
import { Fontisto } from '@expo/vector-icons'; 


const starColor=["#F4D03F","#F4D03F","#F4D03F","#F4D03F","#5D6D7E"]
export default function State() {
  return (
    <View style={styles.container}>
        <Text style={styles.dg}>Đánh giá</Text>
        <View >
            <Text style={{fontSize:16,color:'#fff'}}>8.6 </Text>
            <Text style={styles.vote}> +6K votes</Text>
        </View>
        <View style={styles.star}>
        {starColor.map((color,index)=>{
            return (
                <Fontisto name="star" size={14} color={color} key={index} />
            )
        })}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#2E4053',
    paddingTop:20,
    paddingLeft:70,
    paddingRight:70,
    paddingBottom:10,
    borderRadius:5

   
    
  },
  dg:{
      fontSize:20,
      color:'#F4D03F',
     left:-50,
     right:30

     
  },
  star:{
      flexDirection:'row',
      right:-30
  },
  
  vote:{
        fontSize:9,
      
        color:colors.text
  }
});