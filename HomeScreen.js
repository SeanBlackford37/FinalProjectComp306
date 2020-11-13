import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'


let DATA = [
    { PostID: "299-36-2174", 
      gameName: "Mario Cart", 
      userScore: 7, 
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    },
    ];


export function HomeScreen({ navigation }) {
    const [input, setData] = useState(DATA);  
    
      const _renderItem = input => (
    
       <TouchableHighlight 
            onPress={() =>  navigation.navigate('PostDetails',{gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent})}>
            <Image style={{width:200, height:200}} source={{uri: input.item.picture}}/>
        
        </TouchableHighlight>
     
    
      );
      
      const _displayInfo = (PostID,gameName,userScore,postContent, picture) =>{
       
        //Alert.alert("PostID: " + PostID + ", Name: " + gameName + ", UserScore: " + userScore + ", postContent: " + postContent + ", Picture: " + picture)
        
      }
      const _update = () =>{
        setData(DATA)
      } 
  
  
  
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <FlatList data={input}
          
          renderItem={_renderItem}
          keyExtractor={item => item.PostID}/>
      </View>
    );
  }