import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeStackScreen, SearchStackScreen, CreatePostStackScreen, PostStackScreen, ProfileStackScreen, PostDetailsStackScreen, SettingsStackScreen} from './tabStack.js'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Create Post" component={CreatePostStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}