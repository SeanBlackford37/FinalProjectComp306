import React, {useState} from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, TouchableOpacity, Alert, Image, Modal, TextInput } from 'react-native';
import styles from './Styles'



export function ProfileScreen({ navigation }) {
	const [temp_data, setData] = useState([
{
	id: '1',
	title: "Batman",
	rating: 5,
	review: "The game makes you FEEL like batman",
	playtime:  50
},
{
	id: '2',
	title: "Spiderman",
	rating: 10,
	review: "Gives you the exaggerated swagger of a black teen",
	playtime: 30
},
{
	id: '3',
	title: "God of War",
	rating: 9,
	review: "Great game, boy",
	playtime: 45
},
{
	id: '4', 
	title: "Street Fighter V",
	rating: 8,
	review: "Fighting Streets has never been so easy",
	playtime: 50
}
]);


const Item = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', position: 'relative', }}>
    <Text>{title}</Text>
  </View>
);

const remItem = (title) => {
	var array = [...temp_data];
	var index = array.findIndex((r) => r.title == title);
	if (index !== -1){
		array.splice(index, 1);
		setData([...array]);

		alert("You've removed a review!");
		} else {
			alert("No Review Under That To Remove");
		}
	};

	const [modalVisible, setModalVisible] = useState(false);
	const [value, onChangeText] = React.useState("Enter Game Here");

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
	<View style={{flex: 1}}>
		
		
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				alert("Modal has been closed");
			}}
		>
		<View style = {{
    		flex: 1,
    		justifyContent: "center",
    		alignItems: "center"
  		}}>
		<View style={styles.modalView}>
		<TextInput
          		style={{borderStyle: 'solid', borderColor: 'black', 
			backgroundColor: 'lightgray', borderRadius: 10, padding: 15}}

          		onChangeText={(text) => onChangeText(text)}
          		value={value}
       		/>

		<TouchableHighlight
			onPress={() =>{ remItem(value); }}>
			<Text style={{padding: 15, backgroundColor: 'pink'}}>Remove</Text>
		</TouchableHighlight>

		<TouchableHighlight
			onPress={() => { setModalVisible(!modalVisible); }}>
		<Text style={{fontWeight: "bold", padding: 15, backgroundColor: "#bad8e0"}}>Close</Text>
		</TouchableHighlight>
		
		</View>
		</View>
		</Modal>

		<Text style={{
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center"
		}}>Reviews</Text>
		<TouchableHighlight
			style={{
			backgroundColor: "#bad8e0",
    			padding: 10,
			borderRadius: 10,
			alignSelf: 'center'}}
        		onPress={() => {setModalVisible(true);}}>
        		<Text style={{ 
				textAlign: "center"}}>Edit Reviews</Text>
     		</TouchableHighlight>

		<FlatList
			data={temp_data}
			renderItem={({ item }) => {
				return (
					<TouchableHighlight 
						onPress={() => {alert("\nGame: " + item.title + 
									"\nRating: "+item.rating +
									"\nReview: "+item.review +
									"\nPlay Time: "+item.playtime+"hrs");}}>
						<Text style={styles.item}> {item.title} </Text>
					</TouchableHighlight>
					);
					}}
					/>
	</View>
	</React.Fragment>
    );
  }
  