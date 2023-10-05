/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatScreen from './ChatScreen';
import SpeechToTextComponent from './SpeechtoTextComponent';
// import Navigator from "./routes/HomeStack.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Pages/Home/Home.js"
import Details1 from "./Pages/Details1/Details1.js"
import Details2 from "./Pages/Details2/Details2.js"
import Details3 from "./Pages/Details3/Details3.js"
import Welcome from "./Pages/Welcome/Welcome.js"
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View style={styles.container}>
    //   <ChatScreen></ChatScreen>
    // </View>
    // <ChatScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details1" component={Details1} />
          <Stack.Screen name="Details2" component={Details2} />
          <Stack.Screen name="Details3" component={Details3} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Chatbot" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // You can set the background color here
  },
});

export default App;
