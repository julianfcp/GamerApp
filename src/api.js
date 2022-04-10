// Base URL

const base_url = "https://api.rawg.io/api/";
const API_KEY = "ce9ecd8edd294ad080dba0454ab84dd3";
// gettin date - month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`; // returns 02 04 05 etc..
  } else {
    return month;
  }
};
// getting date day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`; // returns 02 04 05 etc..
  } else {
    return day;
  }
};

// get current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-ratin&page_size=10`;
// upcoming Games
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New Games
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};
export const upcomingGamesURL = () => {
  return `${base_url}${upcoming_games}`;
};
export const newGamesURL = () => {
  return `${base_url}${new_games}`;
};
// Game Details
export const gameDetailsURL = (id) => {
  return `${base_url}games/${id}?key=${API_KEY}`;
};
// Game screenshots
export const gameScreenShotsURL = (id) => {
  return `${base_url}games/${id}/screenshots?key=${API_KEY}`;
};
// Search Games
export const searchGameURL = (game_name) => {
  return `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=9`;
};
