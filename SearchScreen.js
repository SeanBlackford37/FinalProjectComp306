import React, { useState } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles'
import { connect } from 'react-redux';

function SearchScreen(props) {

    const [input, setDataTwo] = useState(props.gameList.current);  
    
    
    
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
            onPress={() =>  props.navigation.navigate('PostDetails',{
            picture: input.item.picture,
            gameName:input.item.gameName,
            userScore:input.item.userScore, 
            postContent:input.item.postContent, 
            playTime:input.item.playTime,
            avgScore: input.item.avgScore,
            avgPlayTime: input.item.avgPlayTime})}>
            <View style={{padding: 20}}>

                <Text style={{
                    padding: 20, textAlign: 'center',
                    borderColor: 'white',
                    borderWidth: 5,
                    backgroundColor: '#05c131',
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold' }}> {input.item.gameName} {'\n'} </Text>
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#05c131' }}>
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
            <FlatList data={result} style={{ flex: 2, backgroundColor: '#038f24' }}

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