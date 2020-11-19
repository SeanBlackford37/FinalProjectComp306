import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'




export function ReviewsScreen({route, navigation}) {
  const {gameName,userScore,postContent, playTime, picture} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width:150, height:150, padding: 20}} source={{uri: picture}}/>
      <Text>Review List</Text>
      
      
    </View>
  );
}