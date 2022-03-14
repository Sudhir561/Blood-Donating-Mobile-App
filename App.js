//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingScreen from './src/Screens/OnboardingScreen';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <OnboardingScreen/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
   
  },
});

//make this component available to the app
export default App;

