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
import logo from "E:\hackathon 2.0\web\WellnessWhisperApp\assets\alzyellow.GIF";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Empathy in Every Interaction</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details1")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E8C4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100, // Adjust the width and height as needed
    height: 100,
    marginBottom: 20, // Add spacing between logo and text
  },
  text: {
    fontSize: 24,
    color: "black",
    marginBottom: 20, // Add spacing between text and button
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default Home;
