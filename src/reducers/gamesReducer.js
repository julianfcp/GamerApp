const initSate = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gamesReducer = (state = initSate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state }; // return the state

    default:
      return { ...state };
  }
};

export default gamesReducer;
