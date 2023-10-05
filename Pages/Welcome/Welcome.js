/* eslint-disable prettier/prettier */
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Button } from "react-native";
import logo from "../../assets/Comp_1.gif";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";

import { useRef, useEffect } from "react";
import Details1 from "../Details1/Details1";
import Details2 from "../Details2/Details2";
import Details3 from "../Details3/Details3";
import React from "react";
import Home from "../Home/Home";
const Welcome = ({ navigation }) => {
  const translateYValue = useRef(new Animated.Value(0)).current;
  const translateXValue = useRef(new Animated.Value(0)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateYValue, {
        toValue: -100, // Adjust the value to control the vertical movement
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(translateXValue, {
        toValue: 100, // Adjust the value to control the horizontal movement
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(rotateValue, {
        toValue: 90, // Rotate by 45 degrees
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const rotation = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "45deg"], // Rotate by 45 degrees
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello patient</Text>
      <View style={styles.divider} />
      <View style={styles.logoContainer}>
        <Image source={home1} style={styles.logo} />
        <Animated.View
          style={[
            styles.secondLogo,
            {
              transform: [
                { translateY: translateYValue },
                { translateX: translateXValue },
                { rotate: rotation },
              ],
            },
          ]}
        >
          <Image source={home2} style={styles.logo} />
        </Animated.View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.heading2}>I am ALZCARE</Text>
        <Text style={styles.heading3}>Your special memory companion</Text>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <Text style={styles.buttonText}>Talk to me</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("Details3")}>
          <Text style={styles.bottomIcon}>Back</Text>
        </TouchableOpacity>
        <View style={styles.divider2} />
        <TouchableOpacity onPress={() => navigation.navigate("Chatbot")}>
          <Text style={styles.bottomIcon}>Messg</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E8C4",
    alignItems: "center",
  },
  divider2: {
    height: "100%",
    width: 1,
    backgroundColor: "white",
    marginBottom: 20,
  },
  bottom: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  bottomIcon: {
    color: "white",
  },
  container2: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
    marginTop: 80,
  },
  heading2: {
    fontSize: 24,
    color: "black",
    fontWeight: "900",
  },
  heading3: {
    fontSize: 18,
    color: "black",
    paddingBottom: 40,
  },
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "black",
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {},
  secondLogo: {
    position: "relative",
    zIndex: -1,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default Welcome;
