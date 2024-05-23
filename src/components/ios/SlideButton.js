import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");
const BUTTON_WIDTH = 300;
const SLIDE_WIDTH = BUTTON_WIDTH;

export default function  SlideButton() {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startX.value = translateX.value;
    })
    .onUpdate((event) => {
      translateX.value = Math.max(
        0,
        Math.min(startX.value + event.translationX, SLIDE_WIDTH)
      );
    })
    .onEnd(() => {
      if (translateX.value > SLIDE_WIDTH / 2) {
        translateX.value = withSpring(SLIDE_WIDTH);
      } else {
        translateX.value = withSpring(0);
      }
    });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

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
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: BUTTON_WIDTH,
      height: 50,
      backgroundColor: '#4CAF50',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    text: {
      position: 'absolute',
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    slider: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
    arrow: {
      color: '#4CAF50',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });