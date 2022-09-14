import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
function ToDoList({todos}) {
  return (
    <FlatList
      style={styles.block}
      data={todos}
      renderItem={({item}) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default ToDoList;
