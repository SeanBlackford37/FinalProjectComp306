import { Alert } from 'react-native';
import { combineReducers } from 'redux';
import DATA from './dataList'

const INITIAL_STATE = {
    
  current: DATA,
  possible: [],
  
};

const gameReviews = (state = INITIAL_STATE, action)  => {
  const {
    current,
    possible,
  } = state;
  switch (action.type) {
    
    case 'ADD_GAME':
      var count = 0
      //Creates a unique key ID
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var ID = '';
      for (var j = 0; j < 10; j++ ) {
          ID += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      for (var i = 0; i < current.length;i++){
        if(current[i].gameName == action.gameName){
          
          count++;
        }
      }
      if(count == 0){ //Adds the games to the list of games if one is not found
        current.push({PostID: ID, profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "True", gameName: action.gameName, playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added: "no", avgScore: 0, avgPlayTime: 0, numberOfReviews: 0,});
        current.push({PostID: ID + "7", profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "False", gameName: "Mario Cart", playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added: "no"});
        Alert.alert("Added game!")
        
      }else{ //Adds a review if the game is already created
        current.push({PostID: ID, profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "False", gameName: action.gameName, playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added:"no"});
        Alert.alert("Added review!")
      }
   
      const newState = { current, possible };
     
      return newState;
    default:
      return state
      
  }
  
};

export default combineReducers({gameList: gameReviews});

