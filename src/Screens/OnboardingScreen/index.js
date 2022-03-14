//import liraries
import React from 'react';
import { View, Text,Image, StyleSheet,StatusBar } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

// create a component
const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle="dark-content"/>

            <Onboarding
  pages={pic}
  onDone={()=>console.warn("Next button working")}
  onSkip={()=>console.warn("skip button working")}
  
/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%"
    },
});
const pic=[
    
    {
        backgroundColor: 'orange',
        image: <Image source={require('../../../assets/image/soal2.png')} />,
        title: 'BLOOD IS PRECIOUS',
        subtitle: ' Live a longer life with blood donation',
      },

      {
        backgroundColor: 'red',
        image: <Image source={require('../../../assets/image/bro.png')} />,
        title: 'Find Blood Donners',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    {
        backgroundColor: 'purple',
        image: <Image source={require('../../../assets/image/rafiki.png')} />,
        title: 'Post a Blood Request',
        subtitle: 'request someone for blood',
      }
  ]
//make this component available to the app
export default OnboardingScreen;
