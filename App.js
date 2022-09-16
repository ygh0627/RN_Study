/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import AddToDo from './components/AddToDo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setToDos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'rn 기초공부', done: false},
    {id: 3, text: '투두리스트 만들어보기!', done: false},
  ]);

  function onInsert(text) {
    const id = todos.length ? Math.max(...todos.map(el => el.id)) + 1 : 1;
    setToDos(prev => prev.concat({id, text, done: false}));
  }

  function onToggle(id) {
    setToDos(prev =>
      prev.map(el => (el.id === id ? {...el, done: !el.done} : el)),
    );
  }

  function onRemove(id) {
    setToDos(prev => prev.filter(el => el.id !== id));
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' && 'padding'}>
        <DateHead />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        ) : (
          <Empty />
        )}
        <AddToDo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
