import { Alert } from 'react-native';
import { combineReducers } from 'redux';


let DATA = [
    { PostID: "abcd", 
      gameName: "Mario Kart", 
      userScore: 6, 
      postContent: "Review",
      profilePic: "https://i.imgur.com/PRdZe1d.png",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
      playTime: 1.5,
      firstPost: "True",
      added: "no",
    },
    { PostID: "abcde", 
      gameName: "Spider-man Miles Morales", 
      userScore: 9, 
      postContent: "Review",
      profilePic: "https://i.imgur.com/PRdZe1d.png",
      picture: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
      playTime: 15,
      firstPost: "True",
      added: "no",
    },
    { PostID: "abcdef", 
      gameName: "Minecraft", 
      userScore: 10, 
      postContent: "Review",
      profilePic: "https://i.imgur.com/PRdZe1d.png",
      picture: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
      playTime: 100,
      firstPost: "True",
      added: "no",
    },
    { PostID: "abcdefg", 
    gameName: "Mario Kart",
    profilePic: "https://i.imgur.com/PRdZe1d.png",
    userScore: 10, 
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 1.5,
    firstPost: "False",
    added: "no",
  },
  { PostID: "05", 
    gameName: "Spider-man Miles Morales",
    profilePic: "https://i.pinimg.com/564x/99/27/90/99279086833d4d0662c19f294035630b.jpg",
    userScore: 9, 
    postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 15,
    firstPost: "False",
    added: "no",
  },
  { PostID: "06", 
    gameName: "Minecraft",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335",
    userScore: 10, 
    postContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 5,
    firstPost: "False",
    added: "no",
  },
  
    ];
 

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
    
    case 'ADD_FRIEND':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
     
     
     
     //console.log(reviewListC)
      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      var count = 0
      
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var ID = '';
      for ( var j = 0; j < 10; j++ ) {
          ID += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      for (var i = 0; i < current.length;i++){
        if(current[i].gameName == action.gameName){
          
          count++;
        }
      }
      if(count == 0){
        current.push({PostID: ID, profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "True", gameName: action.gameName, playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added: "no"});
        current.push({PostID: ID + "5", profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "False", gameName: "Mario Cart", playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added: "no"});
        Alert.alert("Added game!")
        
      }else{
        current.push({PostID: ID, profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "False", gameName: action.gameName, playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added:"no"});
        Alert.alert("Added review!")
      }
      //console.log(reviewListC)
      // And put friend in friends.current
      
      
      // Finally, update the redux state
      const newState = { current, possible };
     
      
      return newState;
    default:
      return state
      
  }
  
};


export default combineReducers({gameList: gameReviews});

