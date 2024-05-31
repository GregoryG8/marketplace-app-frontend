import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";


export default function ButtonAndroid({navigation}) {

  const onPressButton = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Iniciar Experiencia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primaryColor,
    width: 350,
    height: 50,
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
