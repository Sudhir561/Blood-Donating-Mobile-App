import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DonationRequestScreen from '../Screens/DonationRequestScreen';
import {Icon, Badge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colorValue from '../Shared/commoStyle/ColorValue';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorValue.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={{marginHorizontal:5}}>
              <Image
                resizeMode="contain"
                style={{width:25}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="DonationRequestScreen"
        component={DonationRequestScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="rightcircleo" size={24} color={color} />
          ),
          title: 'Donation Request',
          headerLeft: () => (
            <View style={{marginHorizontal:5}}>
              <Image
                resizeMode="contain"
                style={{width:25}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: 'Profile',
          headerLeft: () => (
            <View style={{marginHorizontal:5}}>
              <Image
                resizeMode="contain"
                style={{width:25,marginLeft:10}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             
              <Feather name="edit" size={25} />
              <View  >
             <Text>Edit</Text>
             </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});

// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/HomeScreen';
// import SearchScreen from '../Screens/SearchScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import DonationRequestScreen from '../Screens/DonationRequestScreen';

// // create a component
// const Tab = createBottomTabNavigator();

// function BottomNavigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="SearchScreen" component={SearchScreen} />
//       <Tab.Screen name="DonationRequestScreen" component={DonationRequestScreen} />
//       <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }



// //make this component available to the app
// export default BottomNavigation;
