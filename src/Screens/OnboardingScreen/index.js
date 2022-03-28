//import liraries
import React,{useEffect} from 'react';
import { View, Text,Image, StyleSheet,StatusBar } from 'react-native';
import { setStringValue,getMyStringValue } from '../../Global/AsyncStorge';

import Onboarding from 'react-native-onboarding-swiper';
import { commonStyle } from '../../Shared/commoStyle/CommonStyle';
import fontValue from '../../Shared/commoStyle/FontValue';
import { useNavigation } from '@react-navigation/core';





// create a component
const OnboardingScreen = () => {
  const navigation=useNavigation()

//create method to navigate login page 
const OnBoardingDone = async () => {
  try {
    await setStringValue('onboarding', 'true');
    await navigation.navigate('LoginScreen');
  } catch (err) {
    console.warn(err);
  }
};




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle="dark-content"/>

            <Onboarding
  pages={pic}
  onSkip={OnBoardingDone}
  onDone={OnBoardingDone}
  
  // titleStyles={
  //   commonStyle({
  //     fontSize: 25,
  //     fontFamily: fontValue.PoppinsMediumItalic,
  //   }).text
  // }
  // subTitleStyles={
  //   commonStyle({fontSize: 16, fontFamily: fontValue.PoppinsRegular})
  //     .text
  // }
  
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
