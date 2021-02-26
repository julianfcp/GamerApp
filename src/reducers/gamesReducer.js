const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  isLoading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComing: action.payload.upComing,
        isLoading: false, // sets false when data is loaded
      }; // return the state
    case "HOME_LOADING":
      return {
        ...state,
        isLoading: true, // sets true before data is loaded
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
