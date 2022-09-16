import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function ToDoItem({item, onToggle, onRemove}) {
  function remove() {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {text: '삭제', onPress: () => onRemove(item.id), style: 'destructive'},
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
      }}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onToggle(item.id)}>
          <View style={[styles.circle, item.done && styles.filled]}>
            {item.done && (
              <Image
                source={require('../assets/icons/check_white/check_white.png')}
              />
            )}
          </View>
        </TouchableOpacity>
        <Text style={item.done && styles.finished}>{item.text}</Text>
      </View>
      {item.done ? (
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    marginRight: 8,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  finished: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default ToDoItem;
