import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView } from 'react-native';
import {colors} from './styles';
import Movie from './screens/Movie'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Movie/>
       
      </ScrollView>
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
