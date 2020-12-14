export const addFriend = (title,score,playTime,review) => (
    {
      type: 'ADD_GAME',
      gameName: title,
      score: score,
      playTime: playTime,
      review: review 
    }
  );

