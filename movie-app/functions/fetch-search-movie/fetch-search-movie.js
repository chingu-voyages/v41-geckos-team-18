const axios = require('axios');

const handler = async (event) => {
  const { searchTerm } = event.queryStringParameters;
  const API_KEY = `api_key=${process.env.API_KEY}`;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const url = `${BASE_URL}/search/multi?${API_KEY}&include_adult=false&query=${searchTerm}`;

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
