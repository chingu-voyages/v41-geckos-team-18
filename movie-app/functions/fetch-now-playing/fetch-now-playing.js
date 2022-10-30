const axios = require('axios');

const handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const movie = 'movie';
  const nowPlaying = 'now_playing';
  const nowPlayingURL = `${BASE_URL}/${movie}/${nowPlaying}?api_key=${API_KEY}`;

  try {
    const { data } = await axios.get(nowPlayingURL);

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handler };
