const axios = require('axios');

const handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TREND_URL = BASE_URL + 'trending/all/week' + '?api_key=' + API_KEY;
  console.log('TREND_URL:', TREND_URL);

  try {
    const {data} = await axios.get(TREND_URL);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {handler};
