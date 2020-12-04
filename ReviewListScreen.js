import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'




export function IndividualReview(props) {
  const {gameName,userScore,postContent, playTime, picture, profilePic} = props.route.params;
 
  
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width:100, height:100, padding: 20}} source={{uri: profilePic}}/>
      <Text>Game Title: {gameName}</Text>
      
      <Text>User Score Score: {userScore}</Text>
      <Text>User Play Time: {playTime} hrs</Text>
      <Text style={{justifyContent: 'center', alignItems: 'center', padding: 20 }}>{postContent} hrs</Text>
     
      
    </View>
  );
}