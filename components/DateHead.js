import {StatusBar, Text, View} from 'react-native';
import React from 'react';
function DateHead() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return (
    <>
      <StatusBar backgroundColor="#26a69a" />
      <View style={{backgroundColor: '#26a69a', padding: 16}}>
        <Text style={{color: 'white', fontSize: 24}}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
}

export default DateHead;
