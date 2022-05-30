import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import Profile from '../Screens/Profile/Profile';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

