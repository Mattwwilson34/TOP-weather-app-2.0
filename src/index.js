/* eslint-disable */

import fetchWeatherData from './modules/fetch-weather-data.js';

const getWeatherData = async () => {
  const weatherData = await fetchWeatherData();
  // console.log(JSON.stringify(weatherData, null, 4));
};

getWeatherData();

// Testing for CI testing
const add = (x, y) => x + y;

export default add;
