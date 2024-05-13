import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View style={styles.home}>
      <View style={styles.imagesContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
  imagesContainer: {
    position: 'relative',
    
  },
  imagesRow1: {
    position: 'absolute',
    left: -75,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow2: {
    position: 'absolute',
    top: 170,
    left: -110,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow3: {
    position: 'absolute',
    top: 333,
    left: -15,
    flexDirection: "row",
    height: 154,
    gap: 10,
    transform: [{ rotate: "-8deg" }],
  },
  imagesRow4: {
    position: 'absolute',
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
});
