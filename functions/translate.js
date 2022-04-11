// const { useGameContext } = require('../src/GameProvider');

const axios = require('axios').default;
require('dotenv').config();


exports.handler = async (event) => {
  // const {
  //   language,
  // } = useGameContext();

  try {
    const queryWord = event.queryStringParameters.word;
    const language = event.queryStringParameters.to;

    console.log('|| language', language);
    // console.log('queryWord', queryWord);
    var subscriptionKey = process.env.REACT_APP_TRANSLATOR_KEY;
    var endpoint = 'https://api.cognitive.microsofttranslator.com';

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
    var location = 'global';

    // nice work puzzling through this mess! this API seems like a huge pain to use!
    return axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        // should this key be secret? maybe it needs to be an environment variable?
        'X-ClientTraceId': '9af1714b-cd72-4018-a129-fef6566bb5ae'
        ,
      },
      params: {
        'api-version': '3.0',
        'from': 'en',
        // 'to': 'fr',
        'to': `${language}`,
      },
      data: [{
        'text': `${queryWord}`,
      }],
      responseType: 'json'
    }).then(function(response){
      // console.log(JSON.stringify(response.data, null, 4));
      return {
        statusCode: 200,
        body: JSON.stringify(response.data, null, 4)
      };
    });
  } catch (error) {
    // console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};