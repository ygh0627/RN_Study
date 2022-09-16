import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

function AddToDo({onInsert}) {
  const [text, setText] = useState('');
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  function onPress() {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  }
  return (
    <View
      style={{
        height: 64,
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="할 일을 입력하세요 !"
        style={{padding: 16, flex: 1}}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          {button}
        </TouchableOpacity>
      ) : (
        <View
          style={{
            overflow: 'hidden',
            width: 48,
            borderRadius: 24,
            overflow: 'hidden',
            marginRight: 12,
          }}>
          <TouchableNativeFeedback onPress={onPress}>
            {button}
          </TouchableNativeFeedback>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginRight: 15,
  },
});

export default AddToDo;
