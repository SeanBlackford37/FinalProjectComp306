import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'




export function PostDetailsScreen({route, navigation}) {
  const {gameName,userScore,postContent, playTime, picture} = route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width:150, height:150, padding: 20}} source={{uri: picture}}/>
      <Text>Game Title: {gameName}</Text>
      
      <Text>Average Score: {userScore}</Text>
      <Text>Avgerage Play Time: {playTime} hrs</Text>
      <TouchableOpacity style = {{ marginTop:20, borderRadius: 10, borderWidth: 5, borderColor: 'black', padding: 15}}
        
        onPress={() =>  navigation.navigate('Reviews',{picture: picture})}
      >
        <Text>Reviews</Text>
      </TouchableOpacity>
      
    </View>
  );
}