import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

interface HeaderProps {
  usingDarkTheme: boolean,
  handleDarkTheme: () => void
}

export function Header({ usingDarkTheme, handleDarkTheme } : HeaderProps) {
  return (
    <SafeAreaView style={ usingDarkTheme ? stylesDark.container : stylesLight.container }>
      <Button
        title={ usingDarkTheme ? 'Alterar para tema claro' : 'Alterar para tema escuro' }
        color='#FFFFFF'
        onPress={ handleDarkTheme }
      />

      <View style={ usingDarkTheme ? stylesDark.header : stylesLight.header }>
        <Text style={ usingDarkTheme ? stylesDark.headerText : stylesLight.headerText}>to.</Text>
        <Text style={[ usingDarkTheme ? stylesDark.headerText :  stylesLight.headerText, { /*fontFamily: 'Poppins-SemiBold'*/ }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const stylesLight = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    //fontFamily: 'Poppins-Regular',
  }
});

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#3E3E3E',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    //fontFamily: 'Poppins-Regular',
  }
});