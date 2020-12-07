import React, { useState } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import { connect } from 'react-redux';

function SearchScreen(props) {

    const [input, setDataTwo] = useState(props.gameList.current);  
    let theData = [
        { key: "1",  name: "Minecraft", avgScore: 8.8, avgPT: 1000 },
        { key: "2", name: "Rocket League", avgScore: 7, avgPT: 250 },
        { key: "3", name: "God Of War", avgScore: 8.7, avgPT: 20 },
        { key: "4", name: "Spider-Man: Miles Morales", avgScore: 9.3, avgPT: 10 },
        { key: "5", name: "Minecraft: Dungeons", avgScore: 8.8, avgPT: 1000 },
        { key: "6", name: "Spiderman", avgScore: 7, avgPT: 250 },
        { key: "7", name: "Dark Souls", avgScore: 8.7, avgPT: 20 },
        { key: "8", name: "Mad Max", avgScore: 9.3, avgPT: 10 },
    ];
    
    
    let list = []
    for(var i = 0; i < input.length; i++){
     
        if(input[i].firstPost == "True"){
            list.push(input[i])
           
        }
        
    }
    let [result, setResult] = useState(list);
    let [searchTitle, setSearchTitle] = useState("null");
    let [searchMinScore, setSearchMinScore] = useState(0);
    let [searchMinPT, setSearchMinPT] = useState(0);
    
    let [tempTitle, setTempTitle] = useState("null");

    const _renderItem = input => (

        <TouchableOpacity 
            onPress={() =>  props.navigation.navigate('PostDetails',{picture: input.item.picture,gameName:input.item.gameName,userScore:input.item.userScore, postContent:input.item.postContent, playTime:input.item.playTime})}>
            <View style={{padding: 20}}>
           
            <Text style={{padding: 20, textAlign: 'center', borderColor:'black', borderWidth: 5}}> {input.item.gameName} {'\n'} </Text>
            </View>
        </TouchableOpacity>


    );
    
    const _search = () => {
        //console.log("searching:");
        // console.log("T- " + searchTitle);
        // console.log("S- " + searchMinScore);
        // console.log("P- " + searchMinPT);
        
        let resultList = []
        for(var i = 0; i < result.length; i++){
     
            if(result[i].gameName.includes(searchTitle)){
                resultList.push(result[i])
               
            }
            
         }
        if (searchTitle != "null" && searchTitle != "" && resultList.length > 0) {
            setResult(resultList);
        }else{
            Alert.alert("Results Could not be found  try again")
            setResult(list)
        }

        // if (searchMinScore == "") {
        //     setSearchMinScore(0);
        // }
        // else {
        //     setSearchMinScore(parseFloat(searchMinScore));
        // }

        // if (searchMinPT == "") {
        //     setSearchMinPT(0);
        // }
        // else {
        //     setSearchMinPT(parseFloat(searchMinPT));
        // }

        // setResult(result.filter(checkAboveScore));

        // setResult(result.filter(checkAbovePT));
    }
    const _clearResult = () =>{
        setResult(list)
      } 
    const checkTitle = (item) => {
        
        setTempTitle(item.title);
        console.log(tempTitle.substring(0, searchTitle.length) + " and " + searchTitle);
        //return tempTitle.substring(0, searchTitle.length) == searchTitle.toLowerCase() || tempTitle.substring(0, searchTitle.length) == searchTitle;
        return true;
    }

    const checkAboveScore = (item) => {
        //console.log(item.avgScore + " and " + searchMinScore);
        //console.log(item.avgScore >= setSearchMinScore);
        return item.avgScore >= setSearchMinScore;
    }

    const checkAbovePT = (item) => {
        //console.log(item.avgPT + " and " + searchMinPT);
        return item.avgPT >= setSearchMinPT;
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search input</Text>
            
                
            <TextInput style={styles.inputs}
                onChangeText={text => setSearchTitle(text)}
                placeholder={"Enter Title"}
            />
            {/* <TextInput style={styles.inputs}
                onChangeText={text => setSearchMinScore(text)}
                placeholder={"Enter Minimum Score"}
            />

            <TextInput style={styles.inputs}
                onChangeText={text => setSearchMinPT(text)}
                placeholder={"Enter Minimum Play Time"}
            /> */}
            <Text>Search results</Text>
            <FlatList data={result} style={{ flex: 2, backgroundColor: '#05c131' }}

                    renderItem={_renderItem} 
                    
                keyExtractor={item => item.PostID}/>
                 <Button
                color="blue"
                onPress={_search}
                    title="Search"
                />
                <Button
                color="red"
                onPress={_clearResult}
                    title="Clear Result"
                />
           
        </View>
        
    );
}
const mapStateToProps = (state) => {
    const { gameList } = state
    return { gameList }
  };
  
  export default connect(mapStateToProps)(SearchScreen);