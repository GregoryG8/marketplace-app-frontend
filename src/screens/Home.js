import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../styles/Colors";

export default function Home() {
  return (
    <View style={styles.home}>
      <View style={styles.imagesContainer}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0)",
          ]}
          style={styles.gradient}
        />
        <View style={styles.imagesRow1}>
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-1.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-3.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-4.jpg")}
          />
        </View>
        <View style={styles.imagesRow2}>
          <Image
            style={styles.image}
            source={require("../assets/Home/fitnees-1.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/fitness-2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/fitness-3.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/fitness-4.jpg")}
          />
        </View>
        <View style={styles.imagesRow3}>
          <Image
            style={styles.image}
            source={require("../assets/Home/health-1.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/health-2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/health-3.jpg")}
          />
        </View>
        <View style={styles.imagesRow4}>
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/fitness-4.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/health-4.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/Home/gym-1.jpg")}
          />
        </View>
      </View>
      <View style={styles.welcome}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0.8)",
            "rgba(255, 255, 255, 1)",
          ]}
          style={styles.gradientBottom}
        />
        <View >
          <Text style={styles.titleWelcome}>Conecta, Entrena y Supérate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
  },
  imagesContainer: {
    position: "relative",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 70,
    zIndex: 1,
  },

  imagesRow1: {
    position: "absolute",
    left: -75,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow2: {
    position: "absolute",
    top: 170,
    left: -110,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow3: {
    position: "absolute",
    top: 333,
    left: -15,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow4: {
    position: "absolute",
    top: 500,
    left: -110,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  image: {
    width: 136.23,
    height: 154,
    borderRadius: 20,
    margin: "auto",
  },

  welcome: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "32%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  gradientBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -69,
    height: 70,
    zIndex: 1,
  },

  titleWelcome: {
      fontWeight: "bold",
      fontSize: 32,
      textAlign: "center",
      color: Colors.textColor,
  },
});
