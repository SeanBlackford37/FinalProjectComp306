import React, { useState } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, Alert, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'

export function SearchScreen({ navigation }) {
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

    let [result, setResult] = useState(theData);
    let [searchTitle, setSearchTitle] = useState("null");
    let [searchMinScore, setSearchMinScore] = useState(0);
    let [searchMinPT, setSearchMinPT] = useState(0);

    let [tempTitle, setTempTitle] = useState("null");

    const _renderItem = input => (

        <TouchableHighlight
            //onpress open a new page with that game/review/whatever
            underlayColor="red">
            
            <Text style={styles.row}>{input.item.key}: {input.item.name} </Text>
        </TouchableHighlight> 


    );

    const _search = () => {
        console.log("searching");
        setResult(theData);

        if (searchTitle != "null" && searchTitle != "") {
            //setResult(result.filter(checkTitle));
        }

        setResult(result.filter(checkAboveScore));

        setResult(result.filter(checkAbovePT));
    }

    const checkTitle = (item) => {
        
        //setTempTitle(item.title);
        //console.log(tempTitle.substring(0, searchTitle.length) + " and " + searchTitle);
        //return tempTitle.substring(0, searchTitle.length) == searchTitle.toLowerCase() || tempTitle.substring(0, searchTitle.length) == searchTitle;
    }

    const checkAboveScore = (item) => {
        return item.avgScore >= setSearchMinScore;
    }

    const checkAbovePT = (item) => {
        return item.avgPT >= setSearchMinPT;
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search input</Text>
            
                
            <TextInput style={styles.inputs}
                onChangeText={text => setSearchTitle(text)}
                placeholder={"Enter Title"}
            />
            <TextInput style={styles.inputs}
                onChangeText={text => setSearchMinScore(text)}
                placeholder={"Enter Minimum Score"}
            />

            <TextInput style={styles.inputs}
                onChangeText={text => setSearchMinPT(text)}
                placeholder={"Enter Minimum Plat Time"}
            />
            <Text>Search results</Text>
            <FlatList data={result} style={{ flex: 2, backgroundColor: '#05c131' }}

                    renderItem={_renderItem} />
                <Button
                color="blue"
                onPress={_search}
                    title="Search"
                />
           
        </View>
        
    );
}
