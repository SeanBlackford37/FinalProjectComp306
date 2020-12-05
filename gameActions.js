export const addFriend = (title,score,playTime,review) => (
    {
      type: 'ADD_FRIEND',
      gameName: title,
      score: score,
      playTime: playTime,
      review: review 
    }
  );

