import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, 
	TouchableOpacity, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Styles'
import {HomeScreen} from './HomeScreen.js'
import {SearchScreen} from './SearchScreen.js'

const temp_data = [
{
	id: 1,
	title: "Batman",
	rating: 5,
	review: "The game makes you FEEL like batman"
},
{
	id: 2,
	title: "Spiderman",
	rating: 10,
	review: "Gives you the exaggerated swagger of a black teen"
},
{
	id: 3,
	title: "God of War",
	rating: 9,
	review: "Insane vibes"
},
{
	id: 4, 
	title: "Street Fighter V",
	rating: 8,
	review: "Fighting Streets has never been so easy"
}
]

const Item = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', position: 'relative', }}>
    <Text>{title}</Text>
  </View>
);

export function ProfileScreen({ navigation }) {
    return (
	<React.Fragment>
      <View style={{ flex: 1 }}>
	<Image
		source={require('./images/default_profile.png')}
		style={styles.profilePicture}
	/>
	<Text style={styles.profileInfoHeader}>
		Info
	</Text>
	<Text style={styles.profileText} onPress={()=>alert("Can't Edit Until Database Functional")}>
		default_username{"\n"}
		default_real_name{"\n"}
		default_age{"\n"}
		default_genre_pref{"\n"}
		default_num_posts{"\n"}
		default_profile_age{"\n"}
	</Text>

	<TouchableOpacity style={styles.editProfile} 
	onPress={()=>alert("Can't Edit Until Database Functional")}>
		<Text>Edit Profile</Text>
	</TouchableOpacity>
      	</View>
	<View style={{ flex: 1 }}>
		<Text style={{
		fontWeight: "bold",
		fontSize: 30,
		left: 145
		}}>Reviews</Text>
		<FlatList
			data={temp_data}
			renderItem={({ item }) => {
				return (
					<TouchableHighlight 
						onPress={() => {alert("\nGame: " + item.title + 
									"\nRating: "+item.rating +
									"\nReview: "+item.review );}}>
						<Text style={styles.item}> {item.title} </Text>
					</TouchableHighlight>
					);
					}}
					/>
	</View>
	</React.Fragment>
    );
  }
  