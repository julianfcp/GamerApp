import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action creator
// when using thunk to async calls we use another function to return
export const loadGames = () => async (dispatch) => {
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
