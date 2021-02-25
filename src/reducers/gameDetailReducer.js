const initState = {
  game: {
    platforms: [],
  },
  screen: {
    results: [],
  },
};

const gameDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game, // game comes from action
        screen: action.payload.screen, // screen comes from action
      }; // return the state

    default:
      return { ...state };
  }
};

export default gameDetailReducer;
