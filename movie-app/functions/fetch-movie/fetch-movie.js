const axios = require('axios');

const handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const imdbID = 'tt0111161';
  const movieURL = `${BASE_URL}/movie/${imdbID}?api_key=${API_KEY}`;

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
