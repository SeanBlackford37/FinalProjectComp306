import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TextInput, Slider} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Slider from '@react-native-community/slider';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'

//$ npm install --save @ptomasroos/react-native-multi-slider

export function CreatePostScreen({ navigation }) {

	const [inputTitle, setInputTitle] = useState("title");
	const [inputReview, setInputReview] = useState("null");
	const [inputPlayTime, setInputPlayTime] = useState("0");
	const [sliderValue, setSliderValue] = useState(5);


	//onPress={() => {navigation.navigate('Home', { addGame: JSON.stringify({title: inputTitle, score: sliderValue, playTime: inputPlayTime, review: inputReview})});
			//}}

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create Post</Text>
		<Text> Enter game title: {inputTitle} </Text>
		<TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text => setInputTitle(text)}
		/>

		<Text> {"\n"} </Text>

		<Text> Enter score: {parseInt(sliderValue)} </Text>
		<Slider style={{ width: 280 }} value={sliderValue} minimumValue = {0} maximumValue = {10} onValueChange = {(val) => {setSliderValue(val)}} />

		<Text> {"\n"} </Text>

		<Text> Enter play time: {inputPlayTime} </Text>
		<TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text3 => setInputPlayTime(text3)}
		/>

		<Text> {"\n"} </Text>

		<Text> What did you think about the game? </Text>
		<TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text4 => setInputReview(text4)}
		/>

		<Text> {"\n"} </Text>

		
		<Button style={{marginBottom: 100}}
			onPress={() => {navigation.navigate('Home', { addGame: JSON.stringify({title: inputTitle, score: sliderValue, playTime: inputPlayTime, review: inputReview}) } ) }
			}
			title='Add Review'
		  />
        
      </View>
    );
  }