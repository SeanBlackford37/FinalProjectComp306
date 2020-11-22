import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeStackScreen, SearchStackScreen, CreatePostStackScreen, PostStackScreen, ProfileStackScreen, PostDetailsStackScreen, SettingsStackScreen} from './tabStack.js'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameReviews from './dataBase.js';
const Tab = createBottomTabNavigator();
const store = createStore(gameReviews);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Create Post" component={CreatePostStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}