import fetchWeatherData from './modules/fetch-weather-data.js';

const getWeatherData = async () => {
  /* eslint-disable no-unused-vars */
  const weatherData = await fetchWeatherData();
  /* eslint-disable no-unused-vars */
  // console.log(JSON.stringify(weatherData, null, 4));
};

getWeatherData();

// Testing for CI testing
const add = (x, y) => x + y;

export default add;
