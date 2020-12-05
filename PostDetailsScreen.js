import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'
import { connect } from 'react-redux';





export function PostDetailsScreen(props) {
  const {gameName,userScore,postContent, playTime, picture,firstPost, PostID} = props.route.params;
  const [inputTwo, setDataTwo] = useState(props.gameList.current);  
  // let item = input[0].firstPost
  // console.log(item)
  let reviewList = []
 
  for(var i = 0; i < inputTwo.length; i++){
     
     if(inputTwo[i].gameName == gameName ){
        reviewList.push(inputTwo[i])
        
     }
  }
  
  const [input, setData] = useState(reviewList)
   
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
          
          keyExtractor={item => item.PostID}/>
    </View>
  );
}


const mapStateToProps = (state) => {
  const { gameList } = state
  return { gameList }
};

export default connect(mapStateToProps)(PostDetailsScreen);