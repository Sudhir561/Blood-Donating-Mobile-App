import React from 'react'
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import OnBoardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignupScreen';

import DrawerNavigation from './DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import { getMyStringValue } from '../Global/AsyncStorge';

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [initialScreenName, setinitialScreenName] = useState("OnBoardingScreen");
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const stringValue = await getMyStringValue('onboarding');
            if (stringValue === 'true') {
                setinitialScreenName("LoginScreen");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <Stack.Navigator initialRouteName={initialScreenName}>

            <Stack.Screen
                name="OnBoardingScreen"

                component={OnBoardingScreen}
                options={{ headerMode: false }}
            />
            <Stack.Screen
                options={{ headerMode: false }}
                name="LoginScreen"
                component={LoginScreen} />
            <Stack.Screen
                options={{ headerMode: false }}
                name="SignUpScreen"
                component={SignUpScreen} />
            <Stack.Screen
                options={{ headerMode: false }}
                name="BottomNavigation"
                component={BottomNavigation} />

            {/* <Stack.Screen 
         name="DrawerNavigation" 
         component={DrawerNavigation} /> */}
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})