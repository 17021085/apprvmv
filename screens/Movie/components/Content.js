import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,ScrollView,StatusBar } from 'react-native';
import {colors} from '../../../styles'



export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.nd}>
          Nội dung phim
      </Text>
      <Text style={styles.cnt}>
      JOKER từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới. Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến Joker trở thành biểu tượng tội lỗi của thành phố Gotham? JOKER sẽ là cái nhìn độc đáo về tên ác nhân khét tiếng của Vũ trụ DC – một câu chuyện gốc thấm nhuần, nhưng tách biệt rõ ràng với những truyền thuyết quen thuộc xoay quanh nhân vật mang đầy tính biểu tượng này.
      </Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
    margin:12,
    borderRadius:5,
    padding:12

    
    
    
  },
  nd:{
      color:'#F1C40F',
      fontSize:15


  },
  cnt:{
    color:'#CCD1D1',
    marginTop:12
   
  }
});