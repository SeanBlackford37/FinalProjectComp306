import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image } from 'react-native';
import styles from './Styles'




export function IndividualReview(props) {
  const {gameName,userScore,postContent, playTime, picture, profilePic} = props.route.params;
  
  
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#05c131' }}>
        <Image
            source={require('./images/VelpLogoFull.png')}
            style={{ height: 100, width: 200 }}
        />

      <Image style={{width:100, height:100, padding: 20}} source={{uri: profilePic}}/>
        <Text style={{
            borderRadius: 3,
            borderColor: 'black',
            color: 'white'}}>Game Title: {gameName}</Text>
      
        <Text style={{ color: 'white' }}>User Score Score: {userScore}</Text>
        <Text style={{ color: 'white' }}>User Play Time: {playTime} hrs</Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', padding: 20, color: 'white' }}>{postContent} </Text>
     
      
    </View>
  );
}