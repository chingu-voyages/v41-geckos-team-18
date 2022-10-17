const axios = require('axios');

const handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const imdbID = 'tt0111161';
  const movieURL = `${BASE_URL}/movie/${imdbID}?api_key=${API_KEY}`;
  console.log('movieURL:', movieURL);
  // const TREND_URL = BASE_URL + 'trending/all/week' + '?api_key=' + API_KEY;
  // console.log('TREND_URL:', TREND_URL);

  try {
    const { data } = await axios.get(movieURL);

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handler };
