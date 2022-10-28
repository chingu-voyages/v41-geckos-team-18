const axios = require('axios');

const handler = async (event) => {
  const { query, pageId } = event.queryStringParameters;
  const API_KEY = `api_key=${process.env.API_KEY}`;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const url = `${BASE_URL}/search/movie?${API_KEY}&query=${query}&page=${pageId}`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handler };
