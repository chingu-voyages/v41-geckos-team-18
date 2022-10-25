const axios = require('axios');

const handler = async (event) => {
  const { moodId } = event.queryStringParameters;
  const API_KEY = `api_key=${process.env.API_KEY}`;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const url = `${BASE_URL}/discover/movie?${API_KEY}&language=en-US&include_adult=false&with_genres=${moodId}`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handler };
