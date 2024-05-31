import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const COLORS = {
  SLIDE_BUTTON: "#f2f9f9",
  BUTTON_COLOR: "#438e96",
  ARROW_COLOR: "#1a2c32",
};

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 80;
const SLIDE_BUTTON_WIDTH = 50;
const BORDER_RADIUS = 60;

export default function SlideButton({ navigation }) {
  const X = useSharedValue(0);
  const [toggled, setToggled] = useState(false);

  const handleComplete = (isToggled) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
    }
  };

  useEffect(() => {
    if (toggled) {
      navigation.navigate('Login');
    }
  }, [toggled, navigation]);

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = BUTTON_WIDTH - BUTTON_HEIGHT + e.translationX;
      } else {
        newValue = e.translationX;
      }
      if (newValue >= 0 && newValue <= BUTTON_WIDTH - BUTTON_HEIGHT) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(BUTTON_WIDTH - BUTTON_HEIGHT);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const AnimatedStyles = {
    slideStyles: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: X.value,
          },
        ],
      };
    }),

    slideText: useAnimatedStyle(() => {
      return {
          opacity: interpolate(X.value, [0,150], [1,0], Extrapolation),
          transform: [{
              translateX: interpolate(X.value, [0,150], [0, BUTTON_WIDTH / 2 - SLIDE_BUTTON_WIDTH] )
          }]
      }
    }),
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.buttonContainer}>
        <PanGestureHandler onGestureEvent={handleGestureEvent}>
          <Animated.View style={[styles.thumb, AnimatedStyles.slideStyles]}>
            <View style={styles.arrowContainer}>
            <Icon
                name="chevron-right"
                size={25}
                color={COLORS.ARROW_COLOR}
                style={styles.arrowIcon}
              />
              <Icon
                name="chevron-right"
                size={25}
                color={COLORS.ARROW_COLOR}
                style={styles.arrowIcon}
              />
              <Icon
                name="chevron-right"
                size={25}
                color={COLORS.ARROW_COLOR}
                style={styles.arrowIcon}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text style={[styles.buttonText, AnimatedStyles.slideText]}>Iniciar Experiencia</Animated.Text>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: COLORS.BUTTON_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDER_RADIUS,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    zIndex: -1,
  },
  thumb: {
    backgroundColor: COLORS.SLIDE_BUTTON,
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    borderRadius: BORDER_RADIUS,
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowContainer: {
    flexDirection: "row",
  },
  arrowIcon: {
    marginHorizontal: -7, // Reduce spacing between arrows
  },
});
