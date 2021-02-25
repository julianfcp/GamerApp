import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  // Fetch with Axios
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotsURL(id));
  // Dispatch the action with the payload
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
