import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, TextInput, Slider, Image } from 'react-native';
import { addFriend } from './gameActions';

function CreatePostScreen(props) {
	const [inputTitle, setInputTitle] = useState("title");
	const [inputReview, setInputReview] = useState("null");
	const [inputPlayTime, setInputPlayTime] = useState("");
	const [scoreValue, setscoreValue] = useState("");
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#05c131' }}>
            <Image
                source={require('./images/VelpLogoFull.png')}
                style={{ height: 100, width:200 }}
            />
            <Text style={styles.labels}> Enter game title: {inputTitle} </Text>
            <TextInput style={styles.inputs}
		onChangeText ={text => setInputTitle(text)}
		/>

		<Text> {"\n"} </Text>

            <Text style={styles.labels}> Enter score: {scoreValue} </Text>
            <TextInput style={styles.inputs}
		onChangeText ={text2 => setscoreValue(text2)}
		/>

		<Text> {"\n"} </Text>

            <Text style={styles.labels}> Enter play time (in hours): {inputPlayTime} </Text>
            <TextInput style={styles.smallInputs}
		onChangeText ={text3 => setInputPlayTime(text3)}
		/>

		<Text> {"\n"} </Text>

            <Text style={styles.labels}> What did you think about the game? </Text>
            <TextInput style={styles.largeInputs}
                multiline
                numberOfLines={4}
		onChangeText ={text4 => setInputReview(text4)}
		/>

		<Text> {"\n"} </Text>

		
		<Button style={{marginBottom: 100}}
			
				onPress={() => props.addFriend(inputTitle, parseInt(scoreValue), parseInt(inputPlayTime), inputReview)}
				
			title='Add Review'
		  />
         <Button
          title="Back to home"
          onPress={() =>
            props.navigation.navigate('Home')
          }
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    },
    inputs: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        height: 40,
        width: 120,
    },
    smallInputs: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        height: 40,
        width: 40,
    },
    largeInputs: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        height: 100,
        width: 150,
        textAlign: 'left',
    },
    labels: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => {
  const {gameList } = state
  return { gameList}
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFriend,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);