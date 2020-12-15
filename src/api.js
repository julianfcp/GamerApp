// Base URL

const base_url = "https://api.rawg.io/api/";

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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-ratin&page_size=10`;
// upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New Games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};
export const upcomingGamesURL = () => {
  return `${base_url}${upcoming_games}`;
};
export const newGamesURL = () => {
  return `${base_url}${new_games}`;
};
