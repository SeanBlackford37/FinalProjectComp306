import React, {useState, useEffect} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import { connect } from 'react-redux';

let avg = [
    {
      gameName: "testOne",
      avgScore: 6,
      avgPlaytime: 10,
      numberOfReviews: 5,
    }
]


function HomeScreen(props)  {
  
  const [inputTwo, setDataTwo] = useState(props.gameList.current); 
  
    
  // let item = input[0].firstPost
  // console.log(item)
  
 var count = 0
  for(var j = 0; j < inputTwo.length; j++){
    count  = 0
      for(var m = 0; m < avg.length; m++){
          if(inputTwo[j].gameName == avg[m].gameName && inputTwo[j].added == "no"){
            
            inputTwo[j].added = "yes"
            avg[m].numberOfReviews += 1;
            avg[m].avgScore = (avg[m].avgScore + inputTwo[j].userScore) / avg[m].numberOfReviews
            avg[m].avgPlayTime = (avg[m].avgPlayTime + inputTwo[j].playTime)
            
          }else if(inputTwo[j].added == "no"){
          count +=1
        }
      }
      
      if(count >= avg.length){
        avg.push({gameName:inputTwo[j].gameName, numberOfReviews: 1, avgScore:inputTwo[j].userScore, avgPlayTime:inputTwo[j].playTime})
      }
  }
  
  let reviewList = []
  for(var i = 0; i < inputTwo.length; i++){
     
     if(inputTwo[i].firstPost == "True"){
        
        for(var r = 0; r < avg.length;r++){
          if(inputTwo[i].gameName == avg[r].gameName ){
             inputTwo[i].added = "yes"
              reviewList.push({PostID: inputTwo[i].PostID,gameName: inputTwo[i].gameName, picture:inputTwo[i].picture,
                numberOfReviews: avg[r].numberOfReviews, avgScore: avg[r].avgScore,avgPlayTime: avg[r].avgPlayTime, added: "yes"})
                r = avg.length+1
            }
        }
     }
     
  }
  
  const [input, setData] = useState(reviewList)
  
  const _update = () =>{
    setData(reviewList)
    
  } 
  const ConTwoDecDigit=(digit)=>{
    return digit.toFixed(2)
  }
  
    
  const _renderItem = (input) => (
      
       <TouchableOpacity 
            onPress={() =>  props.navigation.navigate('PostDetails',{avgScore: input.item.avgScore, avgPlayTime:input.item.avgPlayTime, picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime})}>
            <View style={{flexDirection: "row"}}>
              
              
            <Image style={{width:150, height:150, padding: 20}} source={{uri: input.item.picture}}/>
            <Text style={{padding: 20, textAlign: 'center'}}>{input.item.numberOfReviews} Reviews {'\n'} 
            <Text></Text>
            Avg Score: {ConTwoDecDigit(input.item.avgScore)} {'\n\n'} 
            Avg Play Time: {'\n\t'} {ConTwoDecDigit(input.item.avgPlayTime)} Hours  </Text>
            </View>
        </TouchableOpacity>
     
    
      );
      
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <Text style>Home screen</Text>
        <FlatList data={input}
          
          renderItem={_renderItem}
          
          keyExtractor={item => item.PostID}/>
          <Button 
          color="blue"
          onPress={_update}
          title="Refresh List"
      />
          {/* <Text>You have {props.gameList.current.length} friends.</Text> */}

          {/* <Button
            title="Add some friends"
            onPress={() =>
              props.navigation.navigate('Friends')
            }/> */}
      </View>
    );
  }

  const mapStateToProps = (state) => {
    const { gameList } = state
    return { gameList }
  };
  
  export default connect(mapStateToProps)(HomeScreen);