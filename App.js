import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView } from 'react-native';
import {colors} from './styles';
import Movie from './screens/Movie';
import Listfilm from './screens/ListMovie/Listfilm'
import Profile from './screens/Profile'


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Movie/> */}
          {/* <Listfilm/> */}
        <Profile/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
