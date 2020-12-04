import { Alert } from 'react-native';
import { combineReducers } from 'redux';


let DATA = [
    { PostID: "01", 
      gameName: "Mario Cart", 
      userScore: 6, 
      postContent: "Review",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
      playTime: 1.5,
    },
    { PostID: "02", 
      gameName: "Spider-man Miles Morales", 
      userScore: 9, 
      postContent: "Review",
      picture: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
      playTime: 15,
    },
    { PostID: "03", 
      gameName: "Minecraft", 
      userScore: 10, 
      postContent: "Review",
      picture: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
      playTime: 100,
    },
    ];
  let reviewList = [
    { PostID: "01", 
    gameName: "Mario Cart",
    profilePic: "https://i.imgur.com/PRdZe1d.png",
    userScore: 6, 
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 1.5,
  },
  { PostID: "02", 
    gameName: "Spider-man Miles Morales",
    profilePic: "https://i.pinimg.com/564x/99/27/90/99279086833d4d0662c19f294035630b.jpg",
    userScore: 9, 
    postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 15,
  },
  { PostID: "03", 
    gameName: "Minecraft",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335",
    userScore: 10, 
    postContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 100,
  },
    ];

const INITIAL_STATE = {
    
  current: DATA,
  possible: [],
  reviewListC: reviewList,
  reviewListpossible: [],
};

const gameReviews = (state = INITIAL_STATE, action) => {
  const {
    current,
    possible,
    reviewListC,
    reviewListpossible,
  } = state;
  switch (action.type) {
    
    case 'ADD_FRIEND':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
     
     console.log(current)
     console.log( reviewListC)
     //console.log(reviewListC)
      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      var count = 0
      
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var ID = '';
      for ( var j = 0; j < 10; j++ ) {
          ID += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      for (var i =0; i < current.length;i++){
        if(current[i].gameName == action.gameName){
          count++;
        }
      }
      if(count == 0){
        Alert.alert("Added game!")
        current.push({PostID: ID, gameName: action.gameName, playTime: action.playTime, userScore: action.score, postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png"});
        
      }else{
        reviewListC.push({PostID: ID, gameName: action.gameName, playTime: action.playTime, userScore: action.score,profilePic: "https://i.pinimg.com/564x/99/27/90/99279086833d4d0662c19f294035630b.jpg", postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png"});
        Alert.alert("Added review!")
      }
      //console.log(reviewListC)
      // And put friend in friends.current
      
      
      // Finally, update the redux state
      const newState = { current, possible };
      const newStateTwo = {  reviewListC, reviewListpossible };
      
      return newState;
    default:
      return state
      
  }
  
};

export default combineReducers({gameList: gameReviews,});

