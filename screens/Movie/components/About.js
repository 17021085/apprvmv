import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../../styles'

const filmne = {
    name: "Joker",
    directors: "Đạo diễn :Todd Phillips",
    country: "Quốc gia: Mỹ, Canada",
    year: "Năm: 2019",
    aboutt: "JOKER từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới. Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến Joker trở thành biểu tượng tội lỗi của thành phố Gotham?"
};
export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{filmne.name}</Text>
            <Text style={styles.directors}>{filmne.directors}</Text>
            <Text style={styles.directors}>{filmne.country}</Text>
            <Text style={styles.directors}>{filmne.year}</Text>
            < Text style={styles.info}>{filmne.aboutt}</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E4053',
        fontWeight: "500",
        borderRadius: 5,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        padding:10,
        margin:12

    },

    name: {
        color: '#F1C40F',
        fontSize: 45,
       fontWeight:'bold'
    },
    directors: {
        color: '#CCD1D1' ,
        fontSize: 12
    },
    info:{
        color: '#CCD1D1' ,
        fontSize: 12,
        marginTop:5
    }

});