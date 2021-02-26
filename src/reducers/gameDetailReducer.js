const initState = {
  game: {
    platforms: [],
  },
  screen: {
    results: [],
  },
  isLoading: true,
};

const gameDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game, // game comes from action
        screen: action.payload.screen, // screen comes from action
        isLoading: false, // sets false when data is loaded
      }; // return the state
    case "DETAIL_LOADING":
      return {
        ...state,
        isLoading: true, // sets true before data is loaded
      };

    default:
      return { ...state };
  }
};

export default gameDetailReducer;
