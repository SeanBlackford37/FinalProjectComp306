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


const INITIAL_STATE = {
    
  current: DATA,
  possible: [],
};

const gameReviews = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      
      

      // And put friend in friends.current
      current.push({PostID: 1, gameName: action.gameName, userScore: action.score, postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png"});
      
      // Finally, update the redux state
      const newState = { current, possible };

      return newState;
    default:
      return state
  }
};

export default combineReducers({
  gameList: gameReviews
});