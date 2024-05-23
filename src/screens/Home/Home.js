import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default function Home() {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Hola como estan todos mamawebos</Text>
    </View>
  )
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });