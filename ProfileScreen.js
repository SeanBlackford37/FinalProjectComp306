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
	playtime:  50,
	imageURI: "https://cnet1.cbsistatic.com/img/LI9YOIflZgH_srkJAz8R0i0bDjw=/1200x675/2015/06/14/8351c430-f382-4bae-b7d7-ef2938d29730/batman-arkham-knight-screen.jpg"
},
{
	id: '2',
	title: "Spiderman",
	rating: 10,
	review: "Gives you the exaggerated swagger of a black teen",
	playtime: 30,
	imageURI: "https://upload.wikimedia.org/wikipedia/en/a/a3/Spider-Man_Miles_Morales.jpeg"
},
{
	id: '3',
	title: "God of War",
	rating: 9,
	review: "Great game, boy",
	playtime: 45,
	imageURI: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg"
},
{
	id: '4', 
	title: "Street Fighter V",
	rating: 8,
	review: "Fighting Streets has never been so easy",
	playtime: 50,
	imageURI: "https://image.api.playstation.com/vulcan/img/cfn/11307MTvkumhOsLQiA_3g0ZbFhLnHOOWVw3qR4Rum7sKAh8I3THtbG0aa-P7dF7-miXzo1ceqN897MfxYZ7Qx-GaEZs8kq4X.png"
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
	const [modal2Visible, setModal2Visible] = useState(false);
	const [value, onChangeText] = React.useState("Enter Game Here");
	const [username, onChangeUsername] = React.useState("Default_Username");
	const [aboutMe, onChangeAboutMe] = React.useState("Default_aboutMe");

    return (
        <React.Fragment>
            <View style={{ flex: 1, backgroundColor: '#05c131' }}>
	<Image
		source={require('./images/default_profile.png')}
		style={styles.profilePicture}
	/>
	<Text style={styles.profileInfoHeader}>
		Info
	</Text>
	<Text style={styles.profileText}>
		Username: {"\n"}
		{username}{"\n"}
		{"\n"}
		 About Me: {"\n"}
		{aboutMe}
	</Text>

	<TouchableOpacity style={styles.editProfile} 
	onPress={() => {setModal2Visible(true)}}>
		<Text>Edit Profile</Text>
	</TouchableOpacity>
	
	
            </View>

            <View style={{ flex: 1, backgroundColor: '#05c131' }}>
		
		<Modal
			animationType="slide"
			transparent={true}
			visible={modal2Visible}
			onRequestClose={() => {
				alert("Modal has been closed");
			}}
		>
		<View style = {{
    		flex: 1,
    		justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#44c061'
  		}}>
		<View style={styles.modalView}>
		<Text style={{fontWeight: 'bold', padding: 10}}>Change Username</Text>
		<TextInput
          		style={{borderStyle: 'solid', borderColor: 'black', 
			backgroundColor: 'lightgray', borderRadius: 10, padding: 15}}

          		onChangeText={(text) => onChangeUsername(text)}
          		value={username}
       		/>
		<Text style={{fontWeight: 'bold', padding: 10}}>Tell Us About Yourself</Text>
		<TextInput
          		style={{borderStyle: 'solid', borderColor: 'black', 
			backgroundColor: 'lightgray', borderRadius: 10, padding: 15}}

          		onChangeText={(text) => onChangeAboutMe(text)}
          		value={aboutMe}
       		/>

		<TouchableHighlight
			style = {{padding: 1, borderRadius: 5, backgroundColor:"#bad8e0" }}
			onPress={() => { setModal2Visible(!modal2Visible); }}>
		<Text style={{fontWeight: "bold", padding: 15, backgroundColor: "#bad8e0"}}>Close</Text>
		</TouchableHighlight>
		
		</View>
		</View>
		</Modal>




		<Text style={{
		fontWeight: "bold",
		fontSize: 30,
        textAlign: "center",
        color: 'white'
		}}>Reviews</Text>
		<TouchableHighlight
			style={{
			backgroundColor: "white",
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
			<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'lightgreen', borderWidth: 1 }}>
			<Image
				source={{uri: item.imageURI}}
				style={{width: 100, height: 100, margin: 10, borderRadius: 15}}/>
			<View>
                        <TouchableHighlight 
                            style={{ backgroundColor: 'lightgreen'}}
						onPress={() => {alert("\nGame: " + item.title + 
									"\nRating: "+item.rating +
									"\nReview: "+item.review +
									"\nPlay Time: "+item.playtime+"hrs");}}>
						<Text style={styles.item}> {item.title} </Text>
                        </TouchableHighlight>
			</View>
                        </View>
					);
					}}
					/>
	</View>
	</React.Fragment>
    );
  }
  