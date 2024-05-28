import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from "../../styles/Colors";



const Colors = {
  SLIDE_BUTTON: Colors.backgroundColor,
  BUTTON_COLOR: Colors.primaryColor,
  BACKGROUND_COLOR: Colors.secundaryColor,
  ARROW_COLOR: Colors.textColor,
}

const BUTTON_WIDTH

export default function  SlideButton() {
  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Start Experience</Text>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.slider, rStyle]}>
            <Text style={styles.arrow}>{">>>"}</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
      alignItems: 'center',
    },
  });