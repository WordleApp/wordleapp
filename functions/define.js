const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  try {
    // grab the same word sent to the translate function and feed it into this dictionary endpoint
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${event.queryStringParameters.queryWord}`);
    

    const json = await response.json();
    console.log(json, 'json');
    console.log(response, 'response');
    
    return { 
      statusCode: 200, 
      body: JSON.stringify(json),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
