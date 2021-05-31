import React from 'react';
import { View, Text, StatusBar, Button, StyleSheet } from 'react-native';

interface HeaderProps {
  usingDarkTheme: boolean,
  handleDarkTheme: () => void
}

export function Header({ usingDarkTheme, handleDarkTheme } : HeaderProps) {
  return (
    <>
      <Button
        title={ usingDarkTheme ? 'Alterar para tema claro' : 'Alterar para tema escuro' }
        color='#FFFFFF'
        onPress={ handleDarkTheme }
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { /*fontFamily: 'Poppins-SemiBold'*/ }]}>do</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
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
