import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import { connect } from 'react-redux';




function HomeScreen(props) {
    const [input, setData] = useState(props.gameList.current);  
    
      const _renderItem = input => (
        
       <TouchableOpacity 
            onPress={() =>  props.navigation.navigate('PostDetails',{picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime})}>
            <View style={{flexDirection: "row"}}>
            <Image style={{width:150, height:150, padding: 20}} source={{uri: input.item.picture}}/>
            <Text style={{padding: 20, textAlign: 'center'}}>--- Reviews {'\n'} 
            <Text></Text>
            Avg Score: -- {'\n\n'} 
            Avg Play Time: {'\n\t'} --- Hours  </Text>
            </View>
        </TouchableOpacity>
     
    
      );
      
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <Text style>Home screen</Text>
        <FlatList data={input}
          
          renderItem={_renderItem}
          
          keyExtractor={item => item.gameName}/>
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