// Base URL

const base_url = "https://api.rawg.io/api/";

// gettin date - month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month);
  if (month < 10) {
    return `0${month}`; // returns 02 04 05 etc..
  } else {
    return month;
  }
};
// getting date day
const getCurrentDay = () => {
  const day = new Date().getDate();
  console.log(day);
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

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};
