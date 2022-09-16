import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ToDoItem from './ToDoItem';
function ToDoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      style={styles.block}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={todos}
      renderItem={({item}) => (
        <ToDoItem item={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginTop: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
export default ToDoList;
