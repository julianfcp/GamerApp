import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

// I use combineReducers to add multiple reducers
// because the store only allows one parameter

const rootReducers = combineReducers({
  games: gamesReducer,
});

export default rootReducers;
