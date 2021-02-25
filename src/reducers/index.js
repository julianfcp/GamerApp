import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailReducer from "./gameDetailReducer";

// I use combineReducers to add multiple reducers
// because the store only allows one parameter

const rootReducers = combineReducers({
  games: gamesReducer,
  gameDetail: gameDetailReducer,
});

export default rootReducers;
