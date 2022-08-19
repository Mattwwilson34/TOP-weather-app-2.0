import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import moment from 'moment';
import queryString from 'query-string';

dotenv.config();

const fetchWeatherData = async () => {
  // set the Timelines GET endpoint as the target URL
  const getTimelineURL = 'https://api.tomorrow.io/v4/timelines';

  // get your key from app.tomorrow.io/development/keys
  const apikey = process.env.API_KEY;

  // pick the location, as a latlong pair
  const location = [40.758, -73.9855];

  // list the fields
  const fields = [
    'precipitationIntensity',
    'precipitationType',
    'windSpeed',
    'windGust',
    'windDirection',
    'temperature',
    'temperatureApparent',
    'cloudCover',
    'cloudBase',
    'cloudCeiling',
    'weatherCode',
  ];

  // choose the unit system, either metric or imperial
  const units = 'imperial';

  // set the timesteps, like "current", "1h" and "1d"
  const timesteps = ['current', '1h', '1d'];

  // configure the time frame up to 6 hours back and 15 days out
  const now = moment.utc();
  const startTime = moment.utc(now).add(0, 'minutes').toISOString();
  const endTime = moment.utc(now).add(1, 'days').toISOString();

  // specify the timezone, using standard IANA timezone format
  const timezone = 'America/New_York';

  // request the timelines with all the query string parameters as options
  const getTimelineParameters = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    },
    { arrayFormat: 'comma' },
  );

  const response = await fetch(`${getTimelineURL}?${getTimelineParameters}`, {
    method: 'GET',
    compress: true,
  });

  const weatherData = await response.json();
  return weatherData;
};

export default fetchWeatherData;
