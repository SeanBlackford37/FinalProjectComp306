import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, TextInput, Slider } from 'react-native';
import { addFriend } from './gameActions';

function CreatePostScreen(props) {
	const [inputTitle, setInputTitle] = useState("title");
	const [inputReview, setInputReview] = useState("null");
	const [inputPlayTime, setInputPlayTime] = useState("0");
	const [sliderValue, setSliderValue] = useState(5);
    return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create Post</Text>
		<Text> Enter game title: {inputTitle} </Text>
		<TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text => setInputTitle(text)}
		/>

		<Text> {"\n"} </Text>

		<Text> Enter score: {parseInt(sliderValue)} </Text>
		<Slider style={{ width: 280 }} value={sliderValue} minimumValue = {0} maximumValue = {10} onValueChange = {(val) => {setSliderValue(val)}} />

		<Text> {"\n"} </Text>

		<Text> Enter play time (in hours): {inputPlayTime} </Text>
		<TextInput style={{ height: 40, width: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text3 => setInputPlayTime(text3)}
		/>

		<Text> {"\n"} </Text>

		<Text> What did you think about the game? </Text>
		<TextInput style={{ height: 100, width: 150,borderColor: 'gray', borderWidth: 1}}
		onChangeText ={text4 => setInputReview(text4)}
		/>

		<Text> {"\n"} </Text>

		
		<Button style={{marginBottom: 100}}
			
			onPress={() => props.addFriend(inputTitle, sliderValue, inputPlayTime, inputReview)}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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