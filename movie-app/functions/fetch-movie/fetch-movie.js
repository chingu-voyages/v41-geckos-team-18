const axios = require('axios');

const handler = async (event) => {
  // Example of movieId: tt0111161 - Do not delete
  const { movieId } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3/';

  const endpoints = [
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
    `${BASE_URL}/movie/${movieId}/keywords?api_key=${API_KEY}`,
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`,
  ];

  try {
    const res = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(
        (
          { data: details },
          { data: videos },
          { data: keywords },
          { data: credits },
          { data: similar },
        ) => {
          return { details, videos, keywords, credits, similar };
        },
      ),
    );

    return {
      statusCode: 200,
      body: JSON.stringify(res, null, 2),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handler };
