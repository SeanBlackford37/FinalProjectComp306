import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'

let DATA = [
  { PostID: "01", 
    gameName: "Mario Cart",
    profilePic: "https://i.imgur.com/PRdZe1d.png",
    userScore: 6, 
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 1.5,
  },
  { PostID: "02", 
    gameName: "Spider-man Miles Morales",
    profilePic: "https://i.pinimg.com/564x/99/27/90/99279086833d4d0662c19f294035630b.jpg",
    userScore: 9, 
    postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 15,
  },
  { PostID: "03", 
    gameName: "Minecraft",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335",
    userScore: 10, 
    postContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 100,
  },
  ];



export function PostDetailsScreen(props) {
  const {gameName,userScore,postContent, playTime, picture} = props.route.params;
  const [input, setData] = useState(DATA);  

  const _renderItem = input => (
        
    <TouchableOpacity 
         onPress={() =>  props.navigation.navigate('IndividualReview',{picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime, profilePic: input.item.profilePic})}>
         <View style={{flexDirection: "row"}}>
         <Image style={{width:75, height:75, padding: 20}} source={{uri: input.item.profilePic}}/>
         <Text  style={{padding: 10, textAlign: 'center'}}>{input.item.postContent.substring(0, 20)}... </Text>
         </View>
     </TouchableOpacity>
  
 
   );

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width:200, height:200, padding: 20}} source={{uri: picture}}/>
      <Text>Game Title: {gameName}</Text>
      
      <Text>Average Score: {userScore}</Text>
      <Text>Avgerage Play Time: {playTime} hrs</Text>
      <FlatList data={input}
          
          renderItem={_renderItem}
          
          keyExtractor={item => item.gameName}/>
      {/* <TouchableOpacity style = {{ marginTop:20, borderRadius: 10, borderWidth: 5, borderColor: 'black', padding: 15}}
        
        onPress={() =>  navigation.navigate('Reviews',{picture: picture})}
      >
        <Text>Reviews</Text>
      </TouchableOpacity> */}
      
    </View>
  );
}