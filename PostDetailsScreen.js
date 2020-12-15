import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';





export function PostDetailsScreen(props) {
  const {gameName,userScore,postContent, playTime, picture,firstPost, PostID, avgPlayTime, avgScore} = props.route.params;
  const [inputTwo, setDataTwo] = useState(props.gameList.current);  
  
  let reviewList = []
 
  for(var i = 0; i < inputTwo.length; i++){
     
     if(inputTwo[i].gameName == gameName ){
        reviewList.push(inputTwo[i])
        
     }
  }
  const ConTwoDecDigit=(digit)=>{
    var num = digit
    return num.toFixed(2)
  }
  const [input, setData] = useState(reviewList)
   
  const _renderItem = input => (
    
    <TouchableOpacity 
         onPress={() =>  props.navigation.navigate('IndividualReview',{picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime, profilePic: input.item.profilePic})}>
         <View style={{flexDirection: "row"}}>
              <Image style={{ width: 75, height: 75, padding: 20 }} source={{ uri: input.item.profilePic }} />
              <Text style={{ padding: 10, textAlign: 'center', color: 'white' }}>{input.item.postContent.substring(0, 20)}... </Text>
         </View>
     </TouchableOpacity>
  
 
   );

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#05c131' }}>
        <Image
            source={require('./images/VelpLogoFull.png')}
            style={{ height: 100, width: 200 }}
        />
        <Image style={{ width: 200, height: 200, padding: 20 }} source={{ uri: picture }} />
        
        <Text style={{color: 'white'}} >Game Title: {gameName}</Text>
      
        <Text style={{ color: 'white' }}>Average Score: {ConTwoDecDigit(avgScore)}</Text>
        <Text style={{ color: 'white' }}>Avgerage Play Time: {ConTwoDecDigit(avgPlayTime)} hrs</Text>
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