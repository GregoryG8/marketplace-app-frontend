import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default function Home() {
  return (
    <View style={styles.home}>
      <Text>Hola como estan todos mamawebos</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  home: {
    marginTop: Constants.statusBarHeight, 
    flexGrow: 1
  },
});