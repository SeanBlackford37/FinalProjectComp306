import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'


let DATA = [
    { PostID: "299-36-2174", 
      gameName: "Mario Cart", 
      userScore: 6, 
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    },
    { PostID: "298-36-2174", 
      gameName: "Spider-man Miles Morales", 
      userScore: 9, 
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      picture: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
    },
    { PostID: "297-36-2174", 
      gameName: "Minecraft", 
      userScore: 10, 
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      picture: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
    },
    ];


export function HomeScreen({ navigation }) {
    const [input, setData] = useState(DATA);  
    
      const _renderItem = input => (
    
       <TouchableOpacity 
            onPress={() =>  navigation.navigate('PostDetails',{gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent})}>
            <View style={{flexDirection: "row"}}>
            <Image style={{width:150, height:150, padding: 20}} source={{uri: input.item.picture}}/>
            <Text style={{padding: 20, textAlign: 'center'}}>--- Reviews {'\n'} 
            Avg Score: {input.item.userScore} {'\n\n'} 
            Avg Play Time: {'\n\t'}{input.item.userScore} Hours  </Text>
            </View>
        </TouchableOpacity>
     
    
      );
      
      const _displayInfo = (PostID,gameName,userScore,postContent, picture) =>{
       
        //Alert.alert("PostID: " + PostID + ", Name: " + gameName + ", UserScore: " + userScore + ", postContent: " + postContent + ", Picture: " + picture)
        
      }
      const _update = () =>{
        setData(DATA)
      } 
  
  
  
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <Text style>Home screen</Text>
        <FlatList data={input}
          
          renderItem={_renderItem}
          
          keyExtractor={item => item.PostID}/>
          
      </View>
    );
  }