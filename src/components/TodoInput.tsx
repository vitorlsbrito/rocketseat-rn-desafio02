import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  usingDarkTheme: boolean;
  addTask: (task: string) => void;
}

export function TodoInput({ usingDarkTheme, addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask('');
  }

  return (
    <View style={[ (usingDarkTheme ? stylesDark.inputContainer : stylesLight.inputContainer), Platform.OS === 'ios' ? (usingDarkTheme ? stylesDark.inputIOSShadow : stylesLight.inputIOSShadow) : (usingDarkTheme ? stylesDark.inputAndroidShadow : stylesLight.inputAndroidShadow)]}>
      <TextInput 
        style={ usingDarkTheme ? stylesDark.input : stylesLight.input } 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={ usingDarkTheme ? '#E1E1E6' : '#333333' }
        returnKeyType="send"
        value={ task }
        onChangeText={ setTask }
        onSubmitEditing={ handleAddNewTask }
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={ 0.7 }
        style={ usingDarkTheme ? stylesDark.addButton : stylesLight.addButton }
        onPress={ handleAddNewTask }
      >
        <Image source={ checkIcon } />
      </TouchableOpacity>
    </View>
  )
}

const stylesLight = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

const stylesDark = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#FFF',
    backgroundColor: '#303030',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#181818',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
