import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, TouchableOpacity,Image } from "react-native";
import { TextInput } from 'react-native-paper';
import d1logo from "../../assets/details1.png"
const Details1 = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Details</Text>
      <View style={styles.divider} />
      <TextInput mode="outlined" style={styles.input} label="Patient Full Name" />
      <TextInput mode="outlined" style={styles.input} label="Emergency Number" />
      <TextInput mode="outlined" style={styles.input} label="Patient Age" />
      <Image
        source={d1logo}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details2")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E8C4',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    marginTop: 30
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: 'black',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  logo: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Details1;