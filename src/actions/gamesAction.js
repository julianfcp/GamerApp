import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

// Action creator
// when using thunk to async calls we use another function to return
export const loadGames = () => async (dispatch) => {
  // set isloading true before data is loaded
  dispatch({
    type: "HOME_LOADING",
  });
  // Fetch with Axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  // Dispatch the action with the payload
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComing: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  // search url
  const searchedGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};

export const clearSearchGames = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCH",
  });
};
