import { Alert } from 'react-native';
import { combineReducers } from 'redux';


let DATA = [
    { PostID: "01", 
      gameName: "Mario Kart", 
      userScore: 6, 
      postContent: "Review",
      profilePic: "https://static.wikia.nocookie.net/xbox/images/f/f0/360-wave.png/revision/latest/scale-to-width-down/100?cb=20200426103248",
      picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
      playTime: 1.5,
      firstPost: "True",
      added: "no",
      avgScore: 0,
      avgPlayTime: 0,
      numberOfReviews: 0,
    },
    { PostID: "02", 
      gameName: "Spider-man Miles Morales", 
      userScore: 9, 
      postContent: "Review",
      profilePic: "https://static.wikia.nocookie.net/xbox/images/9/9b/Blue-head-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103256",
      picture: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
      playTime: 15,
      firstPost: "True",
      added: "no",
      avgScore: 0,
      avgPlayTime: 0,
      numberOfReviews: 0,
    },
    { PostID: "03", 
      gameName: "Minecraft", 
      userScore: 10, 
      postContent: "Review",
      profilePic: "https://static.wikia.nocookie.net/xbox/images/a/ae/Bubble-gum-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103304",
      picture: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
      playTime: 100,
      firstPost: "True",
      added: "no",
      avgScore: 0,
      avgPlayTime: 0,
      numberOfReviews: 0,
    },
    { PostID: "04", 
    gameName: "Mario Kart",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/c/ca/Dog-gamerpic.jpg/revision/latest/scale-to-width-down/100?cb=20200426103311",
    userScore: 10, 
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 1.5,
    firstPost: "False",
    added: "no",
  },
  { PostID: "05", 
    gameName: "Spider-man Miles Morales",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/b/ba/Dragon-gamerpic.jpg/revision/latest/scale-to-width-down/100?cb=20200426103318",
    userScore: 9, 
    postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 15,
    firstPost: "False",
    added: "no",
  },
  { PostID: "06", 
    gameName: "Minecraft",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/f/f2/Monkey-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103327",
    userScore: 10, 
    postContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://target.scene7.com/is/image/Target/GUEST_57bbec2f-28e8-40ab-885a-ae1976302fdd?wid=488&hei=488&fmt=pjpeg",
    playTime: 5,
    firstPost: "False",
    added: "no",
  },
  { PostID: "07", 
    gameName: "Call of Duty: Modern Warfare",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/f/f2/Monkey-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103327",
    userScore: 9.4, 
    postContent: "This first-person shooter game published by Activision is the 16th overall in the Call of Duty series. It came out in October 2019 for Microsoft Windows, PlayStation 4, and Xbox One. The storyline follows a CIA officer and British forces who team up to try to save the fictional country of Urzikstan from invasion.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581605670-image.jpg?crop=0.800xw:1xh;center,top&resize=768:*",
    playTime: 45,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "08", 
    gameName: "NBA 2K20",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/scale-to-width-down/100?cb=20200426103335",
    userScore: 6, 
    postContent: "This basketball simulation game, based on the National Basketball Association, is published by 2K Sports. It’s the 21st installment in the NBA 2K franchise, after (you guessed it) NBA 2K19. The game came out in November 2019 for Microsoft Windows, Nintendo Switch, PlayStation 4, and Xbox One. ",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581614836-51-oioaJsZL.jpg?crop=1xw:0.995xh;center,top&resize=768:*",
    playTime: 15,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "09", 
    gameName: "Borderlands 3",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/f/f2/Panda-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103343",
    userScore: 10, 
    postContent: "Released in September 2019 from publisher 2K Games, Borderlands 3 is a first-person shooter action game; it shipped more than 5 million copies in its first five days. It’s the sequel to Borderlands 2, which came out in 2012, and is the fourth in the Borderlands series overall.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581605934-61CRUPJ9VLL.jpg?crop=1xw:0.995xh;center,top&resize=768:*",
    playTime: 100,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "10", 
    gameName: "Mortal Kombat 11",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d3/Pink-hair-girl-gamerpic.png/revision/latest/scale-to-width-down/101?cb=20200426103352",
    userScore: 10, 
    postContent: "This fighting game published by Warner Bros. Interactive Entertainment came out in April 2019 for Microsoft Windows, Nintendo Switch, PlayStation 4, and Xbox One. It’s the 11th overall installment in the Mortal Kombat series, following Mortal Kombat X, which came out in 2015.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581606254-51OOsCOVw3L.jpg?crop=0.990xw:0.980xh;0.00253xw,0.00800xh&resize=768:*",
    playTime: 100,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "11", 
    gameName: "Star Wars Jedi: Fallen Order",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/f/fd/Pirate-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103400",
    userScore: 6, 
    postContent: "This action-adventure game published by Electronic Arts came out for Windows, PlayStation 4, and Xbox One in November 2019. The game takes place in the universe of Star Wars, following Jedi Padawan as he tries to complete his Jedi training and restore the Jedi Order — while action ensues. Fallen Order was the fastest-selling digital launch for any Star Wars game in its first two weeks on the market.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581606374-51hbiHPzTaL.jpg?crop=1.00xw:0.996xh;0,0.00400xh&resize=768:*",
    playTime: 25,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "12", 
    gameName: "Super Smash Bros",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335",
    userScore: 10, 
    postContent: "Released in 2018, Super Smash Bros. Ultimate is the fifth game released in the Super Smash Bros. series. By September 2019, it had sold nearly 16 million copies worldwide — making it the best-selling fighting game ever. In this game, you pick a character and attempt to knock your opponent out of an arena.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581606507-51uC7RoHhrL.jpg?crop=1.00xw:0.774xh;0,0.144xh&resize=768:*",
    playTime: 200,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "13", 
    gameName: "Kingdom Hearts III",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/2/2e/Smiley-face-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200426103408",
    userScore: 4, 
    postContent: "Released in 2019 by Square Enix for PlayStation 4 and Xbox One, Kingdom Hearts III is set against various Disney and Pixar worlds. It’s the 12th installment in the Kingdom Hearts series, meant to wrap up the narrative arc that began with the first game. It sold more than 5 million copies in its first week, making it both the fastest-selling and also the best-selling installment in the series. ",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581606588-61DtwsUMlVL.jpg?crop=1.00xw:0.998xh;0,0.00200xh&resize=768:*",
    playTime: 20,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "14", 
    gameName: "Tom Clancy's The Division 2",
    profilePic: "https://static.wikia.nocookie.net/xbox/images/8/81/Soccer-ball-gamerpic.png/revision/latest/scale-to-width-down/100?cb=20200428004844",
    userScore: 1, 
    postContent: "Tom Clancy's The Division 2 is an online action game published by Ubisoft in March 2019 for Microsoft Windows, PlayStation 4, and Xbox One. The sequel to 2016’s The Division, this game is set in Washington D.C. as smallpox has decimated the city. ",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581606886-51UeJKvzuAL.jpg?crop=1.00xw:0.988xh;0,0.0120xh&resize=768:*",
    playTime: 50,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "15", 
    gameName: "Ark Survival Evolved",
    profilePic: "https://www.pngitem.com/pimgs/m/146-1468323_gamer-profile-icon-png-transparent-png.png",
    userScore: 7, 
    postContent: "It's incredibly ambitious, but without spending hours upon hours building a safe haven to protect you from the brutality of PvP, the single player feels a bit redundant without anyone to play with. Ark: Survival Evolved is a half-baked game that still isn't worth full price.",
    picture: "https://image.api.playstation.com/vulcan/img/rnd/202010/0818/HVUPJTyjOslwxbwCC8edPC45.png",
    playTime: 5000,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "16", 
    gameName: "Grand Theft Auto V",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdDCoWzOKqc1Qae0roQVE-5-QVxy3J0sfqw&usqp=CAU*",
    userScore: 10, 
    postContent: "eleased by Rockstar Games in 2013, Grand Theft Auto V is an open world, action adventure game. As its title implies, players in the game’s fictional world of San Andreas commit crimes and try to evade authorities. As of late-2019 data, Grand Theft Auto V had sold more than 115 million copies to become the third best-selling game of all time.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581607644-61s8HfeFoL.jpg?crop=0.998xw:1xh;center,top&resize=768:*",
    playTime: 100,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "17", 
    gameName: "Marvel’s Spider-Man",
    profilePic: "https://my.playstation.com/PS-bug-blue-9e6d5ba0329b2c480bed55a62e5aa7a5.png",
    userScore: 8, 
    postContent: "Based on Marvel Comics’ famous super hero, Spider-Man is an action-adventure game published by Sony Interactive Entertainment in 2018 for PlayStation 4. The game follows the story of both the Peter Parker and Spider-Man sides of the character — fighting evil while navigating civilian life.",
    picture: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581607559-518B2PBNkHL.jpg?crop=0.998xw:1xh;center,top&resize=768:*",
    playTime: 40,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
  },
  { PostID: "18", 
    gameName: "League of Legends",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ov3KVp3fgE-FV1qDr2LgvK355LT6jP3fyQ&usqp=CAU",
    userScore: 10, 
    postContent: "The multiplayer online battle game League of Legends came out in 2009 — and its popularity has only soared since, gaining viral strength. A full decade later, an estimated 115 million players are playing League of Legends annually.",
    picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1185672025.png?crop=0.444xw:1.00xh;0.102xw,0&resize=980:*",
    playTime: 1200,
    firstPost: "True",
    added: "no",
    avgScore: 0,
    avgPlayTime: 0,
    numberOfReviews: 0,
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
        current.push({PostID: ID, profilePic: "https://static.wikia.nocookie.net/xbox/images/d/d6/Orange-black-skull.jpg/revision/latest/top-crop/width/300/height/300?cb=20200426103335", firstPost: "True", gameName: action.gameName, playTime: action.playTime, userScore: action.score,  postContent: action.review, picture:"https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png", added: "no", avgScore: 0, avgPlayTime: 0, numberOfReviews: 0,});
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

