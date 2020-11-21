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
      postContent: "Review",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
      playTime: 1.5,
    },
    { PostID: "298-36-2174", 
      gameName: "Spider-man Miles Morales", 
      userScore: 9, 
      postContent: "Review",
      picture: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
      playTime: 15,
    },
    { PostID: "297-36-2174", 
      gameName: "Minecraft", 
      userScore: 10, 
      postContent: "Review",
      picture: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
      playTime: 100,
    },
    ];


export function HomeScreen({ navigation, route }) {
    const [input, setData] = useState(DATA);  
    
      const _renderItem = input => (
    
       <TouchableOpacity 
            onPress={() =>  navigation.navigate('PostDetails',{picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime})}>
            <View style={{flexDirection: "row"}}>
            <Image style={{width:150, height:150, padding: 20}} source={{uri: input.item.picture}}/>
            <Text style={{padding: 20, textAlign: 'center'}}>--- Reviews {'\n'} 
            Avg Score: -- {'\n\n'} 
            Avg Play Time: {'\n\t'} --- Hours  </Text>
            </View>
        </TouchableOpacity>
     
    
      );
      
      const _displayInfo = (PostID,gameName,userScore,postContent, picture) =>{
       
        //Alert.alert("PostID: " + PostID + ", Name: " + gameName + ", UserScore: " + userScore + ", postContent: " + postContent + ", Picture: " + picture)
        
      }
      const _update = () =>{
        setData(DATA)
      } 

	  React.useEffect(() => {
	  console.log("useEffect called");
		if(route.params?.addGame){
			console.log("addGame " + route.params?.addGame);
			//DATA.push(addGame);
			//_update();
		}
		else{
			console.log("nothin");
		}
	  }, [route.params?.addGame]);
  
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <Text style>Home screen</Text>
        <FlatList data={input}
          
          renderItem={_renderItem}
          
          keyExtractor={item => item.PostID}/>
          
      </View>
    );
  }