import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../../styles';
import { AntDesign } from '@expo/vector-icons';
import { gs } from '../../../styles'



export default function Header() {
    return (
        <View >

            <Image source={require('../../../assets/m3.jpg')} style={{ width: 360, height: 500 ,borderBottomLeftRadius:10,borderBottomRightRadius:10}} />
            <View style={styles.Topbuttons}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <View>
                    <AntDesign name="hearto" size={24} style={styles.topbtright} color="#fff" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Topbuttons: {
        ...gs.rowbeteen,
        position: "absolute",
        top: 30,
        left: 20,
        right: 26

    },
    topbtright: {
        marginLeft: 20,


    },
   
});